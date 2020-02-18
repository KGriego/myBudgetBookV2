/* Library Imports */
import React from "react";
import { Text, View, StyleSheet } from "react-native";

// {
//     name: "CVS",
//         category: "Fast Food (Expenses)",
//     amount: 41.89,
//     type: "Expense",
//     recurring: false,
//     transfer: false
// }

const styles = StyleSheet.create({
  container: {
    display: `flex`,
    flexDirection: `row`
  },
  item3: { flexGrow: 1 }
});

type TransactionInfoProps = {
  transactionInfo: {
    name: string;
    amount: number;
    type: string;
    recurring: boolean;
    transfer: boolean;
    category: string;
  };
};

export default function TransactionInfo(props: TransactionInfoProps) {
  const { transactionInfo } = props;
  const { name, amount, type, recurring, transfer, category } = transactionInfo;
  console.log(transactionInfo);
  return (
    <>
      <View>
        <View style={styles.container}>
          <Text style={{ color: `red` }}>{name}</Text>
          <Text style={{ color: `red`, textAlign: `right`, flexGrow: 1 }}>
            Day, month/day/year
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={{ color: `red` }}>
            {recurring && `recurring icon? `}
            {transfer && `transfer icon? `}
            {category}
          </Text>
          <Text
            style={{
              color: type === `Expense` ? `red` : `green`,
              textAlign: `right`,
              flexGrow: 1
            }}
          >
            {type === `Expense` && `-`}{`$`}{amount}
          </Text>
        </View>
      </View>
      <Text>{`\n`}</Text>
    </>
  );
}
