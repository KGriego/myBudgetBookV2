/* Library Imports */
import React from "react";
import { Text } from "react-native";

type coloredTextProps = {
  text: string;
  // eslint-disable-next-line no-undef
  styles?: object;
  onPress?: () => void;
};

// White Text
export function WhiteText({ text }: coloredTextProps) {
  return <Text style={{ color: `#fff` }}>{text}</Text>;
}
// Red Text
export function RedText({ text, styles, onPress }: coloredTextProps) {
  return (
    <Text style={{ color: `red`, ...styles }} onPress={onPress}>
      {text}
    </Text>
  );
}
RedText.defaultProps = { styles: {}, onPress: null };
