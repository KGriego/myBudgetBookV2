/* Library Imports */
import React from "react";
import moment from "moment";
import { View, StyleSheet, Text, PixelRatio } from "react-native";

/* Component Imports */
import TransactionsInfo from "./transactionInfo";

type TransactionInfoContainerProps = {
  info: {
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
  };
};

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

export default function TransactionInfoContainer(
  props: TransactionInfoContainerProps
) {
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
          <Text style={{ color: `blue` }}>{`Current Balance`}</Text>
          <Text style={{ color: `blue` }}>{`Month Year (DayOfWeek)`}</Text>
        </View>
        <View>
          <Text style={{ color: `blue`, textAlign: `right`, flexGrow: 1 }}>
            {info.endingBalance}
          </Text>
        </View>
      </View>
      {info.transactions.map(transaction => (
        <TransactionsInfo
          transactionInfo={transaction}
          key={JSON.stringify(transaction)}
        />
      ))}
    </View>
  );
}
