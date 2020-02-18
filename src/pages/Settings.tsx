/* Library Imports */
import React from "react";
import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: `#333`,
    justifyContent: `center`,
    padding: 16
  }
});

const SettingsScreen = () => (
  <View style={styles.body}>
    <Text>SettingsScreen</Text>
  </View>
);

export default SettingsScreen;
