/* Library Imports */
import React, { useState, createContext } from "react";
import { createAppContainer } from "react-navigation";

/* Component Imports */
import DrawerNavigator from "./navigation/drawerNavigator";

const BlueContext = createContext(true);

const ApplicationContainer = createAppContainer(DrawerNavigator);

export default function App() {
  const [blue, setBlue] = useState(true);
  return (
    <BlueContext.Provider value={{ blue, setBlue }}>
      <ApplicationContainer />
    </BlueContext.Provider>
  );
}
