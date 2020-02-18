/* Library Imports */
import React from "react";

/* Component Imports */
import { WhiteText } from "./coloredTexts";

function Footer() {
  return (
    <footer style={{ backgroundColor: `#333` }}>
      <WhiteText text={`Footer stuff goes here`} />
    </footer>
  );
}

export default Footer;
