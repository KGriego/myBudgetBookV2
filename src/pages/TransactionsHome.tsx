import React, { useContext } from "react";
import { View, StyleSheet, StatusBar, Text } from "react-native";

// pull in header with DrawerTrigger
import SettingsHeader from "../components/settingsHeader";
import Header from "../components/header";
import { RedText } from "../components/coloredTexts";


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

export default class TransactionsHome extends React.Component {
  // we won't need to configure navigationOptions just yet
  static navigationOptions = {};

  render() {
    return (
      <>
        <StatusBar hidden />
        <Header title={`Transactions`} />
      </>
    );
  }
}
