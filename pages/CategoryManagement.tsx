/* Library Imports */
import React, { useState, createContext, useContext } from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";

// pull in header with DrawerTrigger
import { RedText } from "../components/coloredTexts";
import BackTrigger from "../components/backTrigger";

const CatergoryManagementScreen = props => {
  const { navigation } = props;
  console.log(props);
  return (
    <View style={styles.body}>
      <BackTrigger title={"red"} />
      <Text>CatergoryManagementScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#333",
    justifyContent: "center",
    padding: 16
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "#fff"
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
    color: "#fff"
  },
  highlight: {
    fontWeight: "700"
  }
});

export default CatergoryManagementScreen;
