import React from "react";
import { Platform, View } from "react-native";
import { createStackNavigator } from "react-navigation-stack";

import { RedText } from "../components/coloredTexts";
import BackTrigger from "../components/backTrigger";
import TabBarIcon from "../components/tabBarIcon";

const config = Platform.select({
  web: { headerMode: `screen` },
  default: {}
});

export class AccountManagement extends React.Component {
  // we won't need to configure navigationOptions just yet
  static navigationOptions = {};

  render() {
    return (
      <View>
        <BackTrigger title="Account Management" />
        <RedText text="Account Management Page" />
      </View>
    );
  }
}
// create array of objects for every page to map over and dynamically make the stacks
const AccountManagementStack = createStackNavigator(
  { AccountManagement },
  config
);

// AccountManagementStack.navigationOptions = {
//   tabBarLabel: "Transactions",
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === "ios"
//           ? `ios-information-circle${focused ? "" : "-outline"}`
//           : "md-information-circle"
//       }
//     />
//   )
// };

AccountManagementStack.path = ``;

// console.log(Object.keys(StatisticsStack.router));
const prevGetStateForAction = AccountManagementStack.router.getStateForAction;
const prevChildRouters = AccountManagementStack.router.childRouters;
const prevGetComponentForState = AccountManagementStack.router.getComponentForState;
const prevGetComponentForRouteName = AccountManagementStack.router.getComponentForRouteName;
const prevGetActionCreators = AccountManagementStack.router.getActionCreators;
const prevGetPathAndParamsForState = AccountManagementStack.router.getPathAndParamsForState;
const prevGetActionForPathAndParams = AccountManagementStack.router.getActionForPathAndParams;
const prevGetScreenOptions = AccountManagementStack.router.getScreenOptions;

AccountManagementStack.router.getStateForAction = (action, state) =>
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

  prevGetStateForAction(action, state);
AccountManagementStack.router.getComponentForRouteName = (routeName) =>
  // console.log("getComponentForRouteName", routeName);
  prevGetComponentForRouteName(routeName);
export default AccountManagementStack;
