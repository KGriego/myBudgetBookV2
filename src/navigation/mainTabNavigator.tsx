import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";

import OverViewStack from "../pages/overView";
import TransactionsStack from "../pages/transactions";
import StatisticsStack from "../pages/statistics";
import DiagramStack from "../pages/diagram";
import BudgetStack from "../pages/budgets";

const RootNavigator = createMaterialTopTabNavigator(
  {
    OverViewStack,
    TransactionsStack,
    StatisticsStack,
    DiagramStack,
    BudgetStack
  },
  {
    initialRouteName: `TransactionsStack`,
    tabBarOptions: { showIcon: true }
  }
);

// @ts-ignore
RootNavigator.path = `Home`;

export default createAppContainer(
  createSwitchNavigator(
    {
      // You could add another route here for authentication.
      // Read more at https://reactnavigation.org/docs/en/auth-flow.html
      // Login: LoginNavigator,
      Main: RootNavigator
    },
    { backBehavior: `initialRoute` }
  )
);
