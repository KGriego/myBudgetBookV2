import React from "react";
import { Platform, View } from "react-native";
import { createStackNavigator } from "react-navigation-stack";

import { RedText } from "../components/coloredTexts";
import BackTrigger from "../components/backTrigger";

const config = Platform.select({
  web: { headerMode: `screen` },
  default: {}
});

export class AccountManagement extends React.Component {
  // we won't need to configure navigationOptions just yet
  static navigationOptions = {};

  render() {
    return (
      <View>
        <BackTrigger title={`Account Management`} lastRoute={`Transactions`} />
        <RedText text={`Account Management Page`} />
      </View>
    );
  }
}
// create array of objects for every page to map over and dynamically make the stacks
const AccountManagementStack = createStackNavigator(
  { AccountManagement },
  // @ts-ignore
  config
);

// AccountManagementStack.navigationOptions = {
//   tabBarLabel: "Transactions",
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === "ios"
//           ? `ios-information-circle${focused ? "" : "-outline"}`
//           : "md-information-circle"
//       }
//     />
//   )
// };

AccountManagementStack.path = ``;
export default AccountManagementStack;
