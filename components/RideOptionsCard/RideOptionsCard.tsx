import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { selectNavs } from "../../store/navReducer";
import { selectState } from "../../store/stateReducer";
import { RideOptionsItem } from "./components";
import { Constants } from "./RideOptions.constants";

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const { selected } = useSelector(selectState);
  const { travelTimeInformation } = useSelector(selectNavs);

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
          onPress={() => navigation.navigate("NavigateCard")}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>
          Select a ride-
          {(travelTimeInformation?.distance.value * 0.000621371192).toFixed(
            1
          )}{" "}
          mi
        </Text>
      </View>
      <FlatList
        data={Constants.data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RideOptionsItem
            image={item.image}
            title={item.title}
            multiplier={item.multiplier}
            item={item}
            id={item.id}
          />
        )}
      />
      <View>
        <TouchableOpacity
          disabled={!selected}
          style={tw`bg-black py-3 m-3 ${!selected ? "bg-gray-300" : ""}`}
        >
          <Text style={tw`text-center text-white text-xl`}>
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;
