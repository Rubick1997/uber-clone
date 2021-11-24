import { useNavigation, useRoute } from "@react-navigation/native";
import React, { FC } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import {
  selectNavs,
  setDestination,
  setOrigin,
} from "../../../../store/navReducer";

type NavFavoritesItemType = {
  icon: string;
  place: string;
  description: string;
  location: any;
};

const NavFavoritesItem: FC<NavFavoritesItemType> = ({
  icon,
  place,
  description,
  location,
}) => {
  const dispatch = useDispatch();
  const { origin, destination } = useSelector(selectNavs);
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <TouchableOpacity
      style={tw`flex-row items-center p-5`}
      onPress={() => {
        if (route.name === "HomeScreen") {
          dispatch(
            setOrigin({
              location: location,
              description: description,
            })
          );
          dispatch(setDestination(null));
          navigation.navigate("MapScreen");
        } else if (route.name === "NavigateCard") {
          if (origin?.description === description) {
            alert("Please choose another adress");
          } else {
            dispatch(
              setDestination({
                location: location,
                description: description,
              })
            );
            navigation.navigate("RideOptionsCard");
          }
        }
      }}
    >
      <Icon
        style={tw`mr-4 rounded-full bg-gray-300 p-3`}
        name={icon}
        type="ionicon"
        color="white"
        size={18}
      />
      <View>
        <Text style={tw`font-semibold text-lg`}>{place}</Text>
        <Text style={tw`text-gray-500`}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NavFavoritesItem;
