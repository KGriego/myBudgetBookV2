import React from "react";
import { Text } from "react-native";

type ScreenNameProps = {
  name: string;
};

export default function ScreenName(props: ScreenNameProps) {
  const { name } = props;
  return <Text>{name}</Text>;
}
