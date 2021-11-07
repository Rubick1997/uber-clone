import React from "react";
import { FlatList } from "react-native";
import NavoptionsItem from "../NavoptionsItem";
import { Constants } from "./NavOptions.constants";

const NavOptions = () => {
  return (
    <FlatList
      data={Constants.data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <NavoptionsItem title={item.title} image={item.image} />
      )}
    />
  );
};

export default NavOptions;
