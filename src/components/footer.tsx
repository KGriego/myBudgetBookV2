/* Library Imports */
import React from "react";
// import { StyleSheet } from 'react-native';

/* Component Imports */
import { WhiteText } from "./coloredTexts";

function Footer() {
  return (
    <footer style={{ backgroundColor: `#333` }}>
      <WhiteText text="Footer stuff goes here" />
    </footer>
  );
}

export default Footer;

// this only works on views?
// const styles = StyleSheet.create({});
