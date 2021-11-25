import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FC } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

type NavigateButtonType = {
  style: string;
  screen: any;
  name: string;
  iconName: string;
  color: string;
  nameStyle: string;
  type: string;
};

const NavigateButton: FC<NavigateButtonType> = ({
  screen,
  style,
  iconName,
  type,
  color,
  name,
  nameStyle,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(screen)}
      style={tw`${style}`}
    >
      <Icon name={iconName} type={type} color={color} size={16} />
      <Text style={tw`${nameStyle}`}>{name}</Text>
    </TouchableOpacity>
  );
};

export default NavigateButton;
