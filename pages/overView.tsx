import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
// DrawerActions is a specific type of navigation dispatcher
import { DrawerActions } from "react-navigation-drawer";
// withNavigation allows components to dispatch navigation actions
import { withNavigation } from "react-navigation";

import { RedText } from "../components/coloredTexts";
import TabBarIcon from "../components/tabBarIcon";
import { Transactions } from "./transactions";
import DatePicker from "../components/datePicker";

const config = Platform.select({
  web: { headerMode: "screen" }
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
        <RedText text={"Overview Page"} />
      </>
    );
  }
}

//create array of objects for every page to map over and dynamically make the stacks
const OverViewStack = createStackNavigator(
  {
    Overview: {
      screen: withNavigation(OverView),
      navigationOptions: {
        header: () => <DatePicker />
      }
    }
  },
  config
);

OverViewStack.navigationOptions = {
  tabBarLabel: "Overview",
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

OverViewStack.path = "";

// console.log(Object.keys(StatisticsStack.router));
const prevGetStateForAction = OverViewStack.router.getStateForAction;
const prevChildRouters = OverViewStack.router.childRouters;
const prevGetComponentForState = OverViewStack.router.getComponentForState;
const prevGetComponentForRouteName =
  OverViewStack.router.getComponentForRouteName;
const prevGetActionCreators = OverViewStack.router.getActionCreators;
const prevGetPathAndParamsForState =
  OverViewStack.router.getPathAndParamsForState;
const prevGetActionForPathAndParams =
  OverViewStack.router.getActionForPathAndParams;
const prevGetScreenOptions = OverViewStack.router.getScreenOptions;

OverViewStack.router.getStateForAction = (action, state) => {
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

OverViewStack.router.getComponentForRouteName = routeName => {
  // console.log("getComponentForRouteName", routeName);
  return prevGetComponentForRouteName(routeName);
};

export default OverViewStack;
