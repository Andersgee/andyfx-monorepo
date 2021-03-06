type Theme = typeof light;

/**
 * styled-components with DefaultTheme augmented.
 *
 * see ui/theme/theme.ts
 *
 * DefaultTheme is the type every styled component gets in props.theme (empty by default)
 *
 * see: https://styled-components.com/docs/api#create-a-declarations-file
 */
declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

const bp = [660, 960];

const common = {
  media: {
    sm: `only screen and (max-width: ${bp[0]}px)`,
    md: `only screen and (min-width: ${bp[0] + 1}px) and (max-width: ${bp[1]}px)`,
    lg: `only screen and (min-width: ${bp[1] + 1}px)`,
    md_and_above: `only screen and (min-width: ${bp[0] + 1}px)`,
    md_and_below: `only screen and (max-width: ${bp[1]}px)`,
  },
  transition: {
    fast: "0.15s ease-in-out",
    medium: "0.25s ease-in-out",
    slow: "0.5s ease-in-out",
  },
  font: {
    family: {
      heading: "'Montserrat', sans-serif",
      body: "'Montserrat', sans-serif",
      code: "'Lucida Console', monospace",
      monospace: "'Lucida Console', monospace",
    },
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
    size: {
      xlarge: "2.375rem",
      large: "1.6875rem",
      medium: "1rem",
      small: "0.875rem",
      xsmall: "0.75rem",
    },
  },
  shadow: [
    "none",
    "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
    "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
    "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
    "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
    "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
    "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
    "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
    "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
  ],
};

//inspiration
//https://color.adobe.com/create/color-wheel
export const light = {
  ...common,
  name: "light",
  color: {
    background: "#fcfcfc",
    paper: "#ffffff",
    primary: "#97A7C9",
    accent: "#97C2C9",
    warning: "#ed6c02",
    error: "#d32f2f",
    info: "#0288d1",
    success: "#2e7d32",
    text: {
      primary: "rgba(0,0,0,0.87)",
      secondary: "rgba(0,0,0,0.6)",
      disabled: "rgba(0,0,0,0.38)",
    },
    action: {
      active: "rgba(0,0,0,0.54)",
      hover: "rgba(0,0,0,0.04)",
      focus: "rgba(0,0,0,0.12)",
      selected: "rgba(0,0,0,0.08)",
    },
    icon: {
      fill: "#97A7C9",
      hover: "#97C2C9",
    },
  },
};

export const dark = {
  ...common,
  name: "dark",
  color: {
    background: "#191919",
    paper: "#202020",
    primary: "#2A5373",
    accent: "#298077",
    warning: "#ffa726",
    error: "#f44336",
    info: "#29b6f6",
    success: "#66bb6a",
    text: {
      primary: "rgba(255,255,255,1)",
      secondary: "rgba(255,255,255,0.7)",
      disabled: "rgba(255,255,255,0.5)",
    },
    action: {
      active: "rgba(255,255,255,1)",
      hover: "rgba(255,255,255,0.08)",
      focus: "rgba(255,255,255,0.12)",
      selected: "rgba(255,255,255,0.16)",
    },
    icon: {
      fill: "#2A5373",
      hover: "#298077",
    },
  },
};
