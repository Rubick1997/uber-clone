import React from "react";
import { FlatList } from "react-native";
import { NavOptionsItem } from "./components";
import { Constants } from "./NavOptions.constants";

const NavOptions = () => {
  return (
    <FlatList
      data={Constants.data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <NavOptionsItem
          screen={item.screen}
          title={item.title}
          image={item.image}
        />
      )}
    />
  );
};

export default NavOptions;
