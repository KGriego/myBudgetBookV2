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

export class Statistics extends React.Component {
  // we won't need to configure navigationOptions just yet
  static navigationOptions = {};

  render() {
    return <RedText text={`Statistics Page`} />;
  }
}

// create array of objects for every page to map over and dynamically make the stacks
const StatisticsStack = createStackNavigator(
  {
    Statistics: {
      screen: Statistics,
      navigationOptions: { header: () => <DatePicker /> }
    }
  },
  // @ts-ignore
  config
);

StatisticsStack.navigationOptions = {
  tabBarLabel: `Statistics`,
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      // @ts-ignore
      focused={focused}
      name={
        Platform.OS === `ios` ?
          `ios-information-circle${focused ? `` : `-outline`}` :
          `md-information-circle`
      }
    />
  )
};

StatisticsStack.path = ``;

export default StatisticsStack;
