/* Library Imports */
import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";

/* Component Imports */
import { RedText } from "../components/coloredTexts";

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: `#333`,
    justifyContent: `center`,
    padding: 16
  }
});

const BudgetManagementScreen = props => (
  <>
    <StatusBar barStyle={`light-content`} />
    <View style={styles.body}>
      <RedText text={`BudgetManagementScreen`} />
    </View>
  </>
);

export default BudgetManagementScreen;
