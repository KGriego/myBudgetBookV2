/* Library Imports */
import React from "react";
import { Text } from "react-native";

type coloredTextProps = {
  text: string;
  styles?: Object;
  onPress?: any;
};

// White Text
export const WhiteText = ({ text }: coloredTextProps) => (
  <Text style={{ color: `#fff` }}>{text}</Text>
);
// Red Text
export const RedText = ({ text, styles, onPress }: coloredTextProps) => (
  <Text style={{ color: `red`, ...styles }} onPress={onPress}>
    {text}
  </Text>
);
RedText.defaultProps = { styles: {}, onPress: null };
