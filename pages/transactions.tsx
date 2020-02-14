/* Library Imports */
import React from "react";
import { Platform, View } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { NavigationInjectedProps } from "react-navigation";
/* Component Imports */
import { RedText } from "../components/coloredTexts";
import DatePicker from "../components/datePicker";
import TransactionsList from "../components/transactionsList";
import TabBarIcon from "../components/tabBarIcon";

const config = Platform.select({
  web: { headerMode: "screen" }
  // default: {},
});

interface OverviewProps extends NavigationInjectedProps {
  title: string;
}

export class Transactions extends React.Component {
  // we won't need to configure navigationOptions just yet
  static navigationOptions = {};
  render() {
    return (
      <View>
        <TransactionsList />
      </View>
    );
  }
}

//create array of objects for every page to map over and dynamically make the stacks
const TransactionsStack = createStackNavigator(
  {
    Transactions: {
      screen: Transactions,
      navigationOptions: props => ({
        header: () => <DatePicker />
      })
    }
  },
  config
);
TransactionsStack.navigationOptions = {
  tabBarLabel: "Transactions",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-barcode" : "md-barcode"}
    />
  )
};

TransactionsStack.path = "";

// console.log(Object.keys(StatisticsStack.router));
const prevGetStateForAction = TransactionsStack.router.getStateForAction;
const prevChildRouters = TransactionsStack.router.childRouters;
const prevGetComponentForState = TransactionsStack.router.getComponentForState;
const prevGetComponentForRouteName =
  TransactionsStack.router.getComponentForRouteName;
const prevGetActionCreators = TransactionsStack.router.getActionCreators;
const prevGetPathAndParamsForState =
  TransactionsStack.router.getPathAndParamsForState;
const prevGetActionForPathAndParams =
  TransactionsStack.router.getActionForPathAndParams;
const prevGetScreenOptions = TransactionsStack.router.getScreenOptions;

TransactionsStack.router.getStateForAction = (action, state) => {
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

TransactionsStack.router.getComponentForRouteName = routeName => {
  // console.log("getComponentForRouteName", routeName);
  return prevGetComponentForRouteName(routeName);
};

export default TransactionsStack;
