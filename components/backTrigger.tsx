import React from "react";
import { TouchableOpacity, StyleSheet, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// withNavigation allows components to dispatch navigation actions
import { withNavigation, NavigationInjectedProps } from "react-navigation";

// DrawerActions is a specific type of navigation dispatcher
// import { DrawerActions } from "react-navigation-drawer";
// import { RedText } from "./coloredTexts";

interface DrawerTriggerProps extends NavigationInjectedProps {
  title: string;
}

class DrawerTrigger extends React.Component<DrawerTriggerProps> {
  render() {
    // console.log("DrawTrigger", this.props);
    const { title, navigation } = this.props;
    return (
      <TouchableOpacity
        style={styles.trigger}
        /* pass key down to *EditPage* */
        onPress={() =>
          navigation.navigate("Transactions", {
            go_back_key: navigation.state.key
          })
        }
      >
        <Ionicons
          name={Platform.OS === "ios" ? "ios-arrow-back" : "md-arrow-back"}
          size={30}
          color={"grey"}
        >
          {" "}
          {title}
        </Ionicons>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  trigger: {
    marginLeft: 27.5,
    borderRadius: 30,
    width: "100%",
    height: 60
  }
});

export default withNavigation(DrawerTrigger);
