import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";

// pull in header with DrawerTrigger
import { RedText } from "../components/coloredTexts";
import TabBarIcon from "../components/tabBarIcon";
import DatePicker from "../components/datePicker";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

export class Statistics extends React.Component {
  // we won't need to configure navigationOptions just yet
  static navigationOptions = {};

  render() {
    return <RedText text={"Statistics Page"} />;
  }
}

//create array of objects for every page to map over and dynamically make the stacks
const StatisticsStack = createStackNavigator(
  {
    Statistics: {
      screen: Statistics,
      navigationOptions: {
        header: () => <DatePicker />
      }
    }
  },
  config
);

StatisticsStack.navigationOptions = {
  tabBarLabel: "Statistics",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

StatisticsStack.path = "";

// console.log(Object.keys(StatisticsStack.router));
const prevGetStateForAction = StatisticsStack.router.getStateForAction;
const prevChildRouters = StatisticsStack.router.childRouters;
const prevGetComponentForState = StatisticsStack.router.getComponentForState;
const prevGetComponentForRouteName =
  StatisticsStack.router.getComponentForRouteName;
const prevGetActionCreators = StatisticsStack.router.getActionCreators;
const prevGetPathAndParamsForState =
  StatisticsStack.router.getPathAndParamsForState;
const prevGetActionForPathAndParams =
  StatisticsStack.router.getActionForPathAndParams;
const prevGetScreenOptions = StatisticsStack.router.getScreenOptions;

StatisticsStack.router.getStateForAction = (action, state) => {
  // console.log("getStateForAction");
  // console.log(action, state);
  // console.log("==============");
  // if (state && action.type === "Navigation/COMPLETE_TRANSITION") {
  //   let routes = state.routes;

  //   if (routes.length === 1) {
  //     return {
  //       ...state,
  //       index: 0,
  //     };
  //   }

  //   const lastScene: NavigationRoute = routes.slice(-1)[0];
  //   const lastSceneName = lastScene.routeName;

  //   routes = routes.filter((item: NavigationRoute, index: number) => {
  //     if (index === 0) {
  //       return true;
  //     }

  //     return (item.routeName !== lastSceneName)
  //   });

  //   routes.push(lastScene);

  //   return {
  //     ...state,
  //     index: routes.length - 1,
  //     routes
  //   };
  // }

  return prevGetStateForAction(action, state);
};

StatisticsStack.router.getComponentForRouteName = routeName => {
  // console.log("getComponentForRouteName", routeName);
  return prevGetComponentForRouteName(routeName);
};

export default StatisticsStack;
