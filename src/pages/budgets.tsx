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

class Budgets extends React.Component {
  // we won't need to configure navigationOptions just yet
  static navigationOptions = {};

  render() {
    return <RedText text={`Budget Page`} />;
  }
}
// create array of objects for every page to map over and dynamically make the stacks
const BudgetsStack = createStackNavigator(
  {
    Budgets: {
      screen: Budgets,
      navigationOptions: { header: () => <DatePicker /> }
    }
  },
  // @ts-ignore
  config
);

BudgetsStack.navigationOptions = {
  tabBarLabel: `Budgets`,
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

BudgetsStack.path = ``;

export default BudgetsStack;
