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

const CreateBackupScreen = () => (
  <View style={styles.body}>
    <Text>CreateBackupScreen</Text>
  </View>
);

export default CreateBackupScreen;
