/* Library Imports */
import React from "react";
import { StatusBar, View, StyleSheet } from "react-native";
import { CheckBox } from "react-native-elements";
import { NavigationInjectedProps } from "react-navigation";

/* Component Imports */
import BackTrigger from "../components/backTrigger";
import { RedText } from "../components/coloredTexts";

import { Container } from "../styles";

const styles = StyleSheet.create({
  // @ts-ignore
  container: {
    ...Container.base,
    justifyContent: Container.justifyContentSpaceAround
  },
  // @ts-ignore
  checkbox: {
    ...Container.base
  }
});

interface AddTransactionProps extends NavigationInjectedProps {}
interface AddTransactionState {
  value: string;
}

export class AddTransactions extends React.Component<
  AddTransactionProps,
  AddTransactionState
> {
  constructor(props) {
    super(props);
    this.state = { value: `Expense` };
  }

  // we won't need to configure navigationOptions just yet
  static navigationOptions = {};

  render() {
    const { value } = this.state;
    return (
      <>
        <StatusBar hidden />
        <BackTrigger title={`Add Transaction`} lastRoute={`Transactions`} />
        <View style={styles.container}>
          <View style={styles.checkbox}>
            <CheckBox
              checked={value === `Expense`}
              checkedIcon={`dot-circle-o`}
              uncheckedIcon={`circle-o`}
              onPress={() => this.setState({ value: `Expense` })}
            />
            <RedText text={` Expense`} />
          </View>
          <View style={styles.checkbox}>
            <CheckBox
              checked={value === `Income`}
              checkedIcon={`dot-circle-o`}
              uncheckedIcon={`circle-o`}
              onPress={() => this.setState({ value: `Income` })}
            />
            <RedText text={` Income`} />
          </View>
          <View style={styles.checkbox}>
            <CheckBox
              checked={value === `Transfer`}
              checkedIcon={`dot-circle-o`}
              uncheckedIcon={`circle-o`}
              onPress={() => this.setState({ value: `Transfer` })}
            />
            <RedText text={` Transfer`} />
          </View>
        </View>
        <View style={styles.container}>
          <RedText text={`Use Template`} />
        </View>
        <View>
          {value === `Expense` ? (
            <RedText text={`some text`} />
          ) : value === `Income` ? (
            <RedText text={`income`} />
          ) : (
            <RedText text={`transfer`} />
          )}
        </View>
      </>
    );
  }
}

export default AddTransactions;
