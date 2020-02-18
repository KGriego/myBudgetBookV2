/* Library Imports */
import React from "react";
import { TouchableOpacity, StyleSheet, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { withNavigation, NavigationInjectedProps } from "react-navigation";

// Component Props
interface DrawerTriggerProps extends NavigationInjectedProps {
  title: string;
  // these are routes that exist on this app
  lastRoute: string | "Transactions";
}

const styles = StyleSheet.create({
  trigger: {
    marginLeft: 27.5,
    borderRadius: 30,
    width: `100%`,
    height: 60
  }
});

function DrawerTrigger(props: DrawerTriggerProps) {
  const {
    title,
    lastRoute,
    navigation: { navigate, state }
  } = props;
  return (
    <TouchableOpacity
      style={styles.trigger}
      /* pass key down to *EditPage* */
      onPress={() => navigate(lastRoute, { go_back_key: state.key })}
    >
      <Ionicons
        name={Platform.OS === `ios` ? `ios-arrow-back` : `md-arrow-back`}
        size={30}
        color={`grey`}
      >
        {` `}
        {title}
      </Ionicons>
    </TouchableOpacity>
  );
}

export default withNavigation(DrawerTrigger);
