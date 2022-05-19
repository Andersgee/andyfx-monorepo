import React, { useContext } from "react";
import styled from "styled-components";
import sun from "./sun.svg";
import moon from "./moon.svg";
import { ThemeContext } from "ui";
import iconstyle from "ui/theme/iconstyle";

type Props = {
  className?: string;
};

export default function ToggleThemeButton({ className }: Props) {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <Button className={className} onClick={toggleTheme} aria-label="Toggle theme">
      {isDarkMode ? <Moon /> : <Sun />}
    </Button>
  );
}

const Button = styled.button``;

const Sun = styled(sun)`
  ${iconstyle}
`;

const Moon = styled(moon)`
  ${iconstyle}
  // background color on ecclipse
  circle:last-of-type {
    fill: ${(props) => props.theme.color.background};
  }
`;
