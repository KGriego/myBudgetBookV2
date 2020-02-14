import React from "react";
// import { View, Text, StyleSheet } from 'react-native';

// pull in from DrawerTrigger.js
import DrawerTrigger from "./drawTrigger";
import MainTabNavigator from "../navigation/mainTabNavigator";

type HeaderProps = {
  title: string;
};

const Header = (props: HeaderProps) => {
  const { title } = props;
  return (
    <>
      <DrawerTrigger title={title} />
      <MainTabNavigator />
    </>
  );
};

// const styles = StyleSheet.create({
//   header: {
//     paddingTop: 40,
//     backgroundColor: 'whitesmoke'
//   }
// });

export default Header;
