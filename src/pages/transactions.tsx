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
  web: { headerMode: `screen` }
  // default: {},
});

interface TransactionsProps extends NavigationInjectedProps {
  title: string;
}

const data = [
  {
    day: 1580569200,
    endingBalance: 175.27,
    transactions: [
      {
        name: `Rent`,
        amount: 1417.94,
        type: `Expense`,
        recurring: false,
        transfer: false,
        category: `Rent (LV Apartment)`
      },
      {
        name: `Tacos`,
        amount: 10.03,
        type: `Expense`,
        recurring: false,
        transfer: false,
        category: `Fast Food (Expenses)`
      }
    ]
  },
  {
    day: 1580648400,
    endingBalance: 123.35,
    transactions: [
      {
        name: `CVS`,
        amount: 41.89,
        type: `Expense`,
        recurring: false,
        transfer: false,
        category: `Fast Food (Expenses)`
      }
    ]
  }
];

export class Transactions extends React.Component<TransactionsProps> {
  // we won't need to configure navigationOptions just yet
  static navigationOptions = {};

  render() {
    return (
      <View>
        <TransactionsList data={data} />
      </View>
    );
  }
}

// create array of objects for every page to map over and dynamically make the stacks
const TransactionsStack = createStackNavigator(
  {
    Transactions: {
      screen: Transactions,
      navigationOptions: props => ({ header: () => <DatePicker /> })
    }
  },
  config
);
TransactionsStack.navigationOptions = {
  tabBarLabel: `Transactions`,
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      // @ts-ignore
      focused={focused}
      name={Platform.OS === `ios` ? `ios-barcode` : `md-barcode`}
    />
  )
};

TransactionsStack.path = ``;

export default TransactionsStack;
