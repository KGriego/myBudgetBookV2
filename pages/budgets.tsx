import React from "react";
import { View } from "react-native";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";

// pull in header with DrawerTrigger
import { RedText } from "../components/coloredTexts";
import TabBarIcon from "../components/tabBarIcon";
import { Transactions } from "./transactions";
import DatePicker from "../components/datePicker";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

class Budgets extends React.Component {
  // we won't need to configure navigationOptions just yet
  static navigationOptions = {};
  render() {
    return <RedText text={"Budget Page"} />;
  }
}
//create array of objects for every page to map over and dynamically make the stacks
const BudgetsStack = createStackNavigator(
  {
    Budgets: {
      screen: Budgets,
      navigationOptions: {
        header: () => <DatePicker />
      }
    }
  },
  config
);

BudgetsStack.navigationOptions = {
  tabBarLabel: "Budgets",
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

BudgetsStack.path = "";

// console.log(Object.keys(StatisticsStack.router));
const prevGetStateForAction = BudgetsStack.router.getStateForAction;
const prevChildRouters = BudgetsStack.router.childRouters;
const prevGetComponentForState = BudgetsStack.router.getComponentForState;
const prevGetComponentForRouteName =
  BudgetsStack.router.getComponentForRouteName;
const prevGetActionCreators = BudgetsStack.router.getActionCreators;
const prevGetPathAndParamsForState =
  BudgetsStack.router.getPathAndParamsForState;
const prevGetActionForPathAndParams =
  BudgetsStack.router.getActionForPathAndParams;
const prevGetScreenOptions = BudgetsStack.router.getScreenOptions;

BudgetsStack.router.getStateForAction = (action, state) => {
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

BudgetsStack.router.getComponentForRouteName = routeName => {
  // console.log("getComponentForRouteName", routeName);
  return prevGetComponentForRouteName(routeName);
};

export default BudgetsStack;
