/* Library Imports */
import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
// withNavigation allows components to dispatch navigation actions
import { NavigationInjectedProps, withNavigation } from "react-navigation";
// DrawerActions is a specific type of navigation dispatcher
import { DrawerActions } from "react-navigation-drawer";

interface DrawerTriggerProps extends NavigationInjectedProps {
  title: string;
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
  const { title, navigation } = props;
  return (
    <TouchableOpacity
      style={styles.trigger}
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
    >
      <Ionicons name={`md-menu`} size={30} color={`grey`}>
        {` `}
        {title}
      </Ionicons>
    </TouchableOpacity>
  );
}

export default withNavigation(DrawerTrigger);
