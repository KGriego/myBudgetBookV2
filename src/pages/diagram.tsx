import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";

// pull in header with DrawerTrigger
import { RedText } from "../components/coloredTexts";
import TabBarIcon from "../components/tabBarIcon";
import DatePicker from "../components/datePicker";

const config = Platform.select({
  web: { headerMode: `screen` },
  default: {}
});

class Diagram extends React.Component {
  // we won't need to configure navigationOptions just yet
  static navigationOptions = {};

  render() {
    return <RedText text={`Diagram`} />;
  }
}

const DiagramStack = createStackNavigator(
  {
    Diagram: {
      screen: Diagram,
      navigationOptions: { header: () => <DatePicker /> }
    }
  },
  // @ts-ignore
  config
);

DiagramStack.navigationOptions = {
  tabBarLabel: `Diagram`,
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      // @ts-ignore
      focused={focused}
      name={Platform.OS === `ios` ? `ios-link` : `md-link`}
    />
  )
};

DiagramStack.path = ``;

export default DiagramStack;
