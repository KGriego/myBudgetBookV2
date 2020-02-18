/* Library Imports */
import React from "react";
import moment from "moment";
import {
  View, StyleSheet, Text, PixelRatio
} from "react-native";

/* Component Imports */
import TransactionsInfo from "./transactionInfo";

export default function TransactionsList(props) {
  const { info } = props;
  const day = moment.unix(info.day);
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.dayHolder}>
          {/* Shows the number of the day the transaction occurred on */}
          <Text style={{ color: `blue` }}>{day.format(`DD`)}</Text>
        </View>
        <View>
          <Text style={{ color: `blue` }}>Current Balance</Text>
          <Text style={{ color: `blue` }}>Month Year (DayOfWeek)</Text>
        </View>
        <View>
          <Text style={{ color: `blue`, textAlign: `right`, flexGrow: 1 }}>
            {info.endingBalance}
          </Text>
        </View>
      </View>
      {info.transactions.map((transaction) => {
        {
          /* transaction if the individual transaction that has occurred on that day */
        }
        return (
          <TransactionsInfo
            transactionInfo={transaction}
            key={JSON.stringify(transaction)}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  dayHolder: {
    width: PixelRatio.roundToNearestPixel(25),
    height: PixelRatio.roundToNearestPixel(25)
  },
  container: {
    display: `flex`,
    flexDirection: `row`
  }
});
