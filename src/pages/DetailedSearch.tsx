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

const DetailedSearchScreen = () => (
  <View style={styles.body}>
    <Text>DetailedSearchScreen</Text>
  </View>
);

export default DetailedSearchScreen;
