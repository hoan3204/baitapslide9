import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.header}>
      <Feather name="map-pin" size={20} color="black" />
      <TextInput style={styles.searchBar} placeholder="Search for meals or area" />
      <Feather name="search" size={20} color="gray" />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  searchBar: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 16,
  },
});

export default Header;
