/* Library Imports */
import React from "react";
import { Ionicons } from "@expo/vector-icons";

/* Util Imports */

type TabBarIconProps = {
  name: string;
  color?: string;
};

export default function TabBarIcon(props: TabBarIconProps) {
  const { name, color } = props;
  return (
    <Ionicons
      name={name}
      size={26}
      style={{ marginBottom: -3 }}
      color={color}
    />
  );
}
TabBarIcon.defaultProps = { color: `black` };
