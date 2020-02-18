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

const CSVImportScreen = () => (
  <View style={styles.body}>
    <Text>CSVImportScreen</Text>
  </View>
);

export default CSVImportScreen;
