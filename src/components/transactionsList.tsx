/* Library Imports */
import React from "react";
import { View, StyleSheet } from "react-native";

/* Component Imports */
import TransactionInfoHeader from "./transactionInfoHeader";

type TransactionsListProps = {
  data: Array<{
    day: number;
    endingBalance: number;
    transactions: Array<{
      name: string;
      amount: number;
      type: string;
      recurring: boolean;
      transfer: boolean;
      category: string;
    }>;
  }>;
};

const styles = StyleSheet.create({ container: {} });

export default function TransactionsList(props: TransactionsListProps) {
  const { data } = props;
  return (
    <View style={styles.container}>
      {data.map(transaction => (
        <View key={JSON.stringify(transaction)}>
          <TransactionInfoHeader info={transaction} />
        </View>
      ))}
    </View>
  );
}
