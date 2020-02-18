import React, { useContext } from "react";
import {
  View, StyleSheet, StatusBar, Text
} from "react-native";

// pull in header with DrawerTrigger
import SettingsHeader from "../components/settingsHeader";
import Header from "../components/header";
import { RedText } from "../components/coloredTexts";

export default class TransactionsHome extends React.Component {
  // we won't need to configure navigationOptions just yet
  static navigationOptions = {};

  render() {
    return (
      <>
        <StatusBar hidden />
        <Header title="Transactions" />
      </>
    );
  }
}

const HomeScreen = (props) => {
  // console.log(props);
  const { blue, setBlue } = useContext(BlueContext);
  const bg = blue ? `blue` : `red`;

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#333" />
      <View style={styles.body}>
        <Text
          onPress={() => props.navigation.openDrawer()}
          style={styles.sectionTitle}
        >
          Open Drawer
        </Text>
        <Text style={styles.sectionDescription}>
          Click
          {` `}
          <Text style={styles.highlight}>Open Drawer</Text>
          {` `}
          and click the
          button to change the color. Then come back here and check it out!
        </Text>
        <Text
          onPress={() => setBlue(!blue)}
          style={{ fontSize: 22, color: `white` }}
        >
          Click me to toggle my color
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: `#333`,
    justifyContent: `center`,
    padding: 16
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: `600`,
    color: `#fff`
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: `400`,
    color: `#fff`
  },
  highlight: {
    fontWeight: `700`
  }
});
