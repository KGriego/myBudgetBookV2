// import * as Colors from "./colors";
// import * as Spacing from "./spacing";

export const justifyContentSpaceBetween = { justifyContent: `space-between` };
export const justifyContentSpaceAround = `space-around`;
export const justifyContentSpaceEvenly = `space-evenly`;
export const justifyContentCenter = `center`;
export const justifyContentFlexStart = { justifyContent: `flex-start` };
export const flexDirectionReverse = `row-reverse`;

export const alignItemStretch = {
  alignItems: `stretch`
};
export const alignItemCenter = {
  alignItems: `center`
};
export const alignItemBaseLine = {
  alignItems: `baseline`
};
export const alignItemFlexEnd = {
  alignItems: `flex-end`
};

export const flexWrap = {
  flexWrap: `wrap`
};

export const stretchContainer = {
  alignSelf: `stretch`
};

export const base = {
  display: `flex`
};

export const baseRow = {
  ...base,
  flexDirection: `row`
};

export const baseRowBaseLine = {
  ...baseRow,
  ...alignItemBaseLine
};

export const baseRowCenter = {
  ...baseRow,
  ...alignItemCenter
};

export const baseRowStretch = {
  ...baseRow,
  ...alignItemStretch
};

export const baseRowCenterWrap = {
  ...baseRowCenter,
  ...flexWrap
};

export const baseColumn = {
  ...base,
  flexDirection: `column`
};

export const baseColumnCenter = {
  ...baseColumn,
  ...alignItemCenter
};

export const baseColumnCenterWrap = {
  ...baseColumnCenter,
  ...flexWrap
};
