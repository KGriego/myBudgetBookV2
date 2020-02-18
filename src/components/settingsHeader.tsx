import React from "react";
import { View, StyleSheet } from "react-native";
import BackTrigger from "./backTrigger";

type SettingsHeaderProps = {
  title: string;
};

const styles = StyleSheet.create({
  settingsHeader: {
    paddingTop: 40,
    backgroundColor: `whitesmoke`
  }
});

const settingsHeader = (props: SettingsHeaderProps) => {
  const { title } = props;
  return (
    <View style={styles.settingsHeader}>
      <BackTrigger title={title} />
    </View>
  );
};

export default settingsHeader;
