import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../theme/index";
import { CheckboxHidden } from "../atoms/CheckboxHidden";

interface Props {
  className?: string;
}

export default function ToggleThemeButton({ className }: Props) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDarkMode = theme.name === "dark";

  const dark = `
  M 200 150 m 0 0 l 0 -20 
  M 200 150 m 0 0 l 20 0
  M 200 150 m 0 0 l 0 20 
  M 200 150 m 0 0 l -20 0
  M 200 150 m 0 0 l 14.142 -14.142
  M 200 150 m 0 0 l 14.142 14.142
  M 200 150 m 0 0 l -14.142 14.142
  M 200 150 m 0 0 l -14.142 -14.142`;
  const light = `
  M 200 150 m 0 -90 l 0 -20 
  M 200 150 m 90 0 l 20 0 
  M 200 150 m 0 90 l 0 20 
  M 200 150 m -90 0 l -20 0
  M 200 150 m 63.64 -63.64 l 14.142 -14.142
  M 200 150 m 63.64 63.64 l 14.142 14.142
  M 200 150 m -63.64 63.64 l -14.142 14.142
  M 200 150 m -63.64 -63.64 l -14.142 -14.142`;

  const mooncolor = "#CFDFEB";
  const suncolor = "#fbd137";

  return (
    <Container className={className}>
      <Label>
        <Checkbox ariaLabel="Toggle Darkmode" id="toggleDarkmodeCheckbox" checked={isDarkMode} onChange={toggleTheme} />
        <Svg viewBox="0 0 400 300">
          <title>Toggle Darkmode</title>
          <path fill="none" stroke={suncolor} strokeWidth="20" strokeLinecap="round" d={isDarkMode ? dark : light}>
            <animate
              attributeName="d"
              fill="freeze"
              dur="0.75s"
              begin="toggleDarkmodeCheckbox.click"
              calcMode="spline"
              keyTimes="0 ; 1"
              keySplines="0.25 1 0.5 1"
              values={isDarkMode ? `${light} ; ${dark}` : `${dark} ; ${light}`}
            />
          </path>

          <circle fill={isDarkMode ? mooncolor : suncolor} cx="200" cy="150" r={isDarkMode ? "100" : "50"}>
            <animate
              attributeName="r"
              fill="freeze"
              dur="0.75s"
              begin="toggleDarkmodeCheckbox.click"
              calcMode="spline"
              keyTimes="0 ; 1"
              keySplines="0.25 1 0.5 1"
              values={isDarkMode ? "50; 100" : "100 ; 50"}
            />
            <animate
              attributeName="fill"
              fill="freeze"
              dur="0.75s"
              begin="toggleDarkmodeCheckbox.click"
              calcMode="spline"
              keyTimes="0 ; 1"
              keySplines="0.25 1 0.5 1"
              values={isDarkMode ? `${suncolor} ; ${mooncolor}` : `${mooncolor} ; ${suncolor}`}
            />
          </circle>

          <circle fill={theme.color.background} cx={isDarkMode ? "250" : "400"} cy={isDarkMode ? "110" : "0"} r="70">
            <animate
              attributeName="cx"
              fill="freeze"
              dur="0.75s"
              begin="toggleDarkmodeCheckbox.click"
              calcMode="spline"
              keyTimes="0; 1"
              keySplines="0.65, 0, 0.35, 1"
              values={isDarkMode ? "400; 250" : "250 ; 400"}
            />
            <animate
              attributeName="cy"
              fill="freeze"
              dur="0.75s"
              begin="toggleDarkmodeCheckbox.click"
              calcMode="spline"
              keyTimes="0; 1"
              keySplines="0.65, 0, 0.35, 1"
              values={isDarkMode ? "0 ; 110" : "110 ; 0"}
            />
          </circle>
        </Svg>
      </Label>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 64px;
  height: 48px;
  margin: 4px 4px 4px 10px;
`;

const Label = styled.label``;

const Checkbox = styled(CheckboxHidden)`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Svg = styled.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
