/* Library Imports */
import React from "react";
import { View, StyleSheet } from "react-native";

/* Component Imports */
import TransactionsInfo from "./transactionInfo";
import TransactionInfoHeader from "./transactionInfoHeader";

const data = [
  {
    day: 1580569200,
    endingBalance: 175.27,
    transactions: [
      {
        name: `Rent`,
        category: `Rent (LV Apartment)`,
        amount: 1417.94,
        type: `Expense`
      },
      {
        name: `Tacos`,
        category: `Fast Food (Expenses)`,
        amount: 10.03,
        type: `Expense`
      }
    ]
  },
  {
    day: 1580648400,
    endingBalance: 123.35,
    transactions: [
      {
        name: `CVS`,
        category: `Fast Food (Expenses)`,
        amount: 41.89,
        type: `Expense`,
        recurring: false,
        transfer: false
      }
    ]
  }
];

export default function TransactionsList(props) {
  return (
    <View style={styles.container}>
      {data.map((transaction) => (
        <View key={JSON.stringify(transaction)}>
          {/* transaction is all the transactions for that day */}
          <TransactionInfoHeader info={transaction} />
        </View>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {}
});
