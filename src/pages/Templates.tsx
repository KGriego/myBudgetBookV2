/* Library Imports */
import React from "react";
import { StyleSheet, View, Text } from "react-native";

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

const TemplatesScreen = () => (
  <View style={styles.body}>
    <Text>TemplatesScreen</Text>
  </View>
);

export default TemplatesScreen;
