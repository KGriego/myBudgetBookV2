/* Library Imports */
import React from "react";
import { StyleSheet, View } from "react-native";

/* Component Imports */
import { RedText } from "../components/coloredTexts";
import BackTrigger from "../components/backTrigger";

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: `#333`,
    justifyContent: `center`,
    padding: 16
  }
});

function CatergoryManagementScreen() {
  return (
    <View style={styles.body}>
      <BackTrigger title={`red`} lastRoute={`Transactions`} />
      <RedText text={`CatergoryManagementScreen`} />
    </View>
  );
}

export default CatergoryManagementScreen;
