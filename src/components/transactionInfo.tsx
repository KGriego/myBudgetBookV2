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

export default function TransactionsList(props) {
  console.log(props.transactionInfo);
  const {
    name,
    amount,
    type,
    recurring,
    transfer,
    category
  } = props.transactionInfo;
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
            {type === `Expense` && `-`}
            $
            {amount}
          </Text>
        </View>
      </View>
      <Text>{`\n`}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: `flex`,
    flexDirection: `row`
  },
  item3: {
    flexGrow: 1
  }
});
