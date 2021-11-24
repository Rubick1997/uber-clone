import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Map, NavigateCard, RideOptionsCard } from "../../components";

const MapScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            component={NavigateCard}
            name="NavigateCard"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            component={RideOptionsCard}
            name="RideOptionsCard"
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;
