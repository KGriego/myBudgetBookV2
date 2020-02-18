/* Library Imports */
import React from "react";
import { TouchableOpacity, StyleSheet, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
// withNavigation allows components to dispatch navigation actions
import { withNavigation, NavigationInjectedProps } from "react-navigation";

// Component Props
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

class DrawerTrigger extends React.Component<DrawerTriggerProps> {
  render() {
    // console.log("DrawTrigger", this.props);
    const {
      title,
      navigation: { navigate, state }
    } = this.props;
    return (
      <TouchableOpacity
        style={styles.trigger}
        /* pass key down to *EditPage* */
        onPress={() => navigate(`Transactions`, { go_back_key: state.key })}
      >
        <Ionicons
          name={Platform.OS === `ios` ? `ios-arrow-back` : `md-arrow-back`}
          size={30}
          color="grey"
        >
          {` `}
          {title}
        </Ionicons>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(DrawerTrigger);
