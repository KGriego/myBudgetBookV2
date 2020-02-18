import React from "react";
import { View, Text, StyleSheet } from "react-native";

// pull in from DrawerTrigger.js
import BackTrigger from "./backTrigger";

type SettingsHeaderProps = {
  title: string;
};

const settingsHeader = (props: SettingsHeaderProps) => {
  const { title } = props;
  return (
    <View style={styles.settingsHeader}>
      <BackTrigger title={title} />
    </View>
  );
};

const styles = StyleSheet.create({
  settingsHeader: {
    paddingTop: 40,
    backgroundColor: `whitesmoke`
  }
});

export default settingsHeader;
