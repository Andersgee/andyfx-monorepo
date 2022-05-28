import { css } from "styled-components";

/**
 * Reusable style for svg icons
 */
const iconstyle = css`
  outline: none;
  outline-offset: -1px;
  stroke-width: 0; //remove default default stroke-width 1 on elements.

  * {
    stroke: ${(props) => props.theme.color.icon.fill};
    fill: ${(props) => props.theme.color.icon.fill};
  }

  *[fill="none"] {
    fill: none;
  }
`;

export default iconstyle;
