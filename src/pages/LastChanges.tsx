/* Library Imports */
import React, { useState, createContext, useContext } from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";

// pull in header with DrawerTrigger
import { RedText } from "../components/coloredTexts";

const BlueContext = createContext(true);

const LastChangesScreen = ({ navigation }) => {
  const { blue, setBlue } = useContext(BlueContext);
  const bg = blue ? `blue` : `red`;

  return (
    <>
      <StatusBar barStyle={`light-content`} />
      <View style={[styles.body, { backgroundColor: bg }]}>
        <Text>{`LastChangesScreen`}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: `#333`,
    justifyContent: `center`,
    padding: 16
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: `600`,
    color: `#fff`
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: `400`,
    color: `#fff`
  },
  highlight: { fontWeight: `700` }
});

export default LastChangesScreen;
