/* Library Imports */
import React from "react";
import { StatusBar, TouchableOpacity, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationInjectedProps } from "react-navigation";

/* Component Imports */
import DrawerTrigger from "../components/drawTrigger";
import MainTabNavigator from "../navigation/mainTabNavigator";

interface TransactionsHomeProps extends NavigationInjectedProps { }

export default function TransactionsHome(props: TransactionsHomeProps) {
  const {
    navigation: { navigate, state }
  } = props;
  return (
    <>
      <StatusBar hidden />
      <DrawerTrigger title={`Transactions`} />
      <MainTabNavigator />
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: `rgba(0, 0, 0, 0.2)`,
          alignItems: `center`,
          justifyContent: `center`,
          width: 70,
          position: `absolute`,
          bottom: 10,
          right: 10,
          height: 70,
          backgroundColor: `#fff`,
          borderRadius: 100,
          shadowColor: `#000`,
          shadowOffset: { width: 2, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 3
        }}
        onPress={() => navigate(`AddTransactions`, { go_back_key: state.key })}
      >
        <Ionicons
          name={Platform.OS === `ios` ? `ios-add` : `md-add`}
          size={30}
          color={`#01a699`}
        />
      </TouchableOpacity>
    </>
  );
}
