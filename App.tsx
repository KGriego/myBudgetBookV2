/* Library Imports */
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createAppContainer } from "react-navigation";

/* Component Imports */
import DrawerNavigator from "./src/navigation/DrawerNavigator";

const ApplicationContainer = createAppContainer(DrawerNavigator);

export default function App() {
  return (
    <SafeAreaProvider>
      <ApplicationContainer />
    </SafeAreaProvider>
  );
}
