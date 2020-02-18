/* Library Imports */
import React from "react";

/* Component Imports */
import DrawerTrigger from "./drawTrigger";
import MainTabNavigator from "../navigation/mainTabNavigator";

// const styles = StyleSheet.create({
//   header: {
//     paddingTop: 40,
//     backgroundColor: 'whitesmoke'
//   }
// });

type HeaderProps = {
  title: string;
};

export default function Header(props: HeaderProps) {
  const { title } = props;
  return (
    <>
      <DrawerTrigger title={title} />
      <MainTabNavigator />
    </>
  );
}
