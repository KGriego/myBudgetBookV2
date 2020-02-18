/* Library Imports */
import React from "react";
import { Ionicons } from "@expo/vector-icons";

/* Util Imports */
import Colors from "../styles/colors";

export default function TabBarIcon(props) {
  return (
    <Ionicons
      name={props.name}
      size={26}
      style={{ marginBottom: -3 }}
      color="black"
    />
  );
}
