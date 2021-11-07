import React, { FC } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import tw from "tailwind-react-native-classnames";

type NavOptionsItemType = {
  image: string;
  title: string;
};

const NavOptionsItem: FC<NavOptionsItemType> = ({ image, title }) => {
  return (
    <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
      <Text>
        <View>
          <Image
            style={{ width: 120, height: 120, resizeMode: "contain" }}
            source={{ uri: image }}
          />
          <Text style={tw`mt-2 text-lg font-semibold`}>{title}</Text>
          <Icon
            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
            type="antdesign"
            name="arrowright"
            color="white"
          />
        </View>
      </Text>
    </TouchableOpacity>
  );
};

export default NavOptionsItem;
