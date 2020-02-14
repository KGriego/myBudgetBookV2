/* Library Imports */
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { ScrollView } from "react-native-gesture-handler";
import { DrawerNavigatorItems } from "react-navigation-drawer";

const CustomDrawer = props => {
  return (
    <ScrollView>
      <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={{ fontSize: 32 }}>Drawer</Text>
          <DrawerNavigatorItems
            {...props}
            items={props.items.filter(item => {
              //if the route is transactions, don't show it in the drawer menu
              if (item.routeName !== "Transactions") return item;
            })}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default CustomDrawer;
