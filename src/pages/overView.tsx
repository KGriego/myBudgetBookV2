import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
// withNavigation allows components to dispatch navigation actions
import { NavigationInjectedProps, withNavigation } from "react-navigation";

import { RedText } from "../components/coloredTexts";
import TabBarIcon from "../components/tabBarIcon";
import DatePicker from "../components/datePicker";

const config = Platform.select({
  web: { headerMode: `screen` }
  // default: {},
});

interface OverviewProps extends NavigationInjectedProps {
  title: string;
}

export class OverView extends React.Component<OverviewProps> {
  // we won't need to configure navigationOptions just yet
  static navigationOptions = {};

  render() {
    return (
      <>
        <RedText text={`Overview Page`} />
      </>
    );
  }
}

// create array of objects for every page to map over and dynamically make the stacks
const OverViewStack = createStackNavigator(
  {
    Overview: {
      screen: withNavigation(OverView),
      navigationOptions: { header: () => <DatePicker /> }
    }
  },
  // @ts-ignore
  config
);

OverViewStack.navigationOptions = {
  tabBarLabel: `Overview`,
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

OverViewStack.path = ``;

export default OverViewStack;
