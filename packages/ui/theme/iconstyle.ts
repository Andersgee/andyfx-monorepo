import { css } from "styled-components";

/**
 * Reusable style for svg icons
 */
const iconstyle = css`
  outline: none;
  outline-offset: -1px;
  stroke-width: 0; //remove default default stroke-width 1 on elements.
  * {
    fill: ${(props) => props.theme.color.icon.fill};
    stroke: ${(props) => props.theme.color.icon.fill};
  }

  /*
  &:hover {
    //box-shadow: ${(props) => props.theme.shadow[1]};
    outline: 1px solid ${(props) => props.theme.color.icon.hover};
    * {
      fill: ${(props) => props.theme.color.icon.hover};
      stroke: ${(props) => props.theme.color.icon.hover};
    }
  }
  */
  //outline: 1px solid ${(props) => props.theme.color.icon.hover};
`;

export default iconstyle;
