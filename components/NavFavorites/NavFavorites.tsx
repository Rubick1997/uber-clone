import React from "react";
import { View, Text, FlatList } from "react-native";
import { Constants } from "./NavOptions.constants";
import { NavFavoritesItem } from "./components";
import tw from "tailwind-react-native-classnames";

const NavFavorites = () => {
  return (
    <FlatList
      data={Constants.data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
      )}
      renderItem={({ item: { location, destination, icon, place } }) => {
        return (
          <NavFavoritesItem
            icon={icon}
            place={place}
            description={destination}
            location={location}
          />
        );
      }}
    />
  );
};

export default NavFavorites;
