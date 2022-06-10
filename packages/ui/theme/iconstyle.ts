import { css } from "styled-components";

/**
 * Reusable style for svg icons
 */
const iconstyle = css`
  outline: none;
  outline-offset: -1px;
  stroke-width: 0; //remove default default stroke-width 1 on elements.

  *:not([stroke="none"]) {
    stroke: ${(props) => props.theme.color.icon.fill};
  }

  *:not([fill="none"]) {
    fill: ${(props) => props.theme.color.icon.fill};
  }
`;

export default iconstyle;
