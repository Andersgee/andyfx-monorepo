import { useContext, useEffect, useId } from "react";
import { ThemeContext } from "@andyfx/ui";

type Props = {
  className?: string;
};

/**
 * A div with an id, populated by `window.google.accounts.id.renderButton()` if available
 *
 * @see https://developers.google.com/identity/gsi/web/guides/display-button
 *
 * customization:
 *
 * @see https://developers.google.com/identity/gsi/web/reference/js-reference#GsiButtonConfiguration
 */
export default function GoogleSigninButton({ className }: Props) {
  const id = useId();

  useEffect(() => {
    window?.google?.accounts.id.renderButton(document.getElementById(id), {
      theme: "outline",
      type: "standard",
      size: "large",
      shape: "rectangular",
      logo_alignment: "center",
      width: "250",
    });
  }, [id]);
  return <div id={id} className={className}></div>;
}

/**
 * Same as `GoogleSigninButton` but filled_black or outline style depending on theme.
 *
 * note: Does not play super well with toggling theme...
 */
export function GoogleSigninButtonThemed({ className }: Props) {
  const id = useId();
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const buttonTheme = theme.name === "dark" ? "filled_black" : "outline";

    window?.google?.accounts.id.renderButton(document.getElementById(id), {
      theme: buttonTheme,
      type: "standard",
      size: "large",
      shape: "rectangular",
      logo_alignment: "center",
      width: "250",
    });
  }, [id, theme]);
  return <div id={id} className={className}></div>;
}
