// import * as Colors from "./colors";
// import * as Spacing from "./spacing";

export const justifyContentSpaceBetween = `space-between`;
export const justifyContentSpaceAround = `space-around`;
export const justifyContentSpaceEvenly = `space-evenly`;
export const justifyContentCenter = `center`;

export const base = {
  display: `flex`,
  flexDirection: `row`,
  flexWrap: `wrap`,
  alignItems: `center`
};

export const fullScreenWidthBase = {
  ...base,
  width: `100vw`
};

export const fullElementWidthBase = {
  ...base,
  width: `100%`
};
