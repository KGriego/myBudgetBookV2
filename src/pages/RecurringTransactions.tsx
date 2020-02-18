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

const RecurringTransactionsScreen = () => (
  <View style={styles.body}>
    <Text>RecurringTransactionsScreen</Text>
  </View>
);

export default RecurringTransactionsScreen;
