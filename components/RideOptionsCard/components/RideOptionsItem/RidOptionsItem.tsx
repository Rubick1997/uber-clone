import React, { FC } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "react-native-elements/dist/image/Image";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { selectNavs } from "../../../../store/navReducer";
import { selectState, setSelected } from "../../../../store/stateReducer";
import { Constants } from "../../RideOptions.constants";

type RideOptionsItemType = {
  title: string;
  multiplier: number;
  image: string;
  item: any;
  id: string;
};

const RidOptionsItem: FC<RideOptionsItemType> = ({
  title,
  multiplier,
  image,
  item,
  id,
}) => {
  const dispatch = useDispatch();
  const { selected } = useSelector(selectState);
  const { travelTimeInformation } = useSelector(selectNavs);

  return (
    <TouchableOpacity
      style={tw`flex-row items-center justify-between px-10 ${
        id === selected?.id ? `bg-gray-200` : ""
      } `}
      onPress={() => dispatch(setSelected(item))}
    >
      <Image
        source={{ uri: image }}
        style={{ width: 100, height: 100, resizeMode: "contain" }}
      />
      <View style={tw`-ml-6`}>
        <Text style={tw`text-xl font-semibold`}>{title}</Text>
        <Text>{travelTimeInformation?.duration.text} Travel Time</Text>
      </View>
      <Text style={tw`text-xl`}>
        {new Intl.NumberFormat("en-us", {
          style: "currency",
          currency: "USD",
        }).format(
          (travelTimeInformation?.duration.value *
            Constants.SURGE_CHARGE_RATE *
            multiplier) /
            100
        )}
      </Text>
    </TouchableOpacity>
  );
};

export default RidOptionsItem;
