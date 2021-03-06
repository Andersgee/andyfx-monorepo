/**
 * @see https://developers.google.com/identity/gsi/web/reference/js-reference#GsiButtonConfiguration
 */
interface GsiButtonConfiguration {
  /** The button type. The default value is standard. */
  type?: "standard" | "icon";
  /** The button theme. The default value is outline */
  theme?: "outline" | "filled_blue" | "filled_black";
  /** The button size. The default value is large. */
  size?: "large" | "medium" | "small";
  /** The button text. The default value is signin_with */
  text?: "signin_with" | "signup_with" | "continue_with" | "signin";
  /** The button shape. The default value is rectangular */
  shape?: "rectangular" | "pill" | "circle" | "square";
  /** The alignment of the Google logo. The default value is left. Only applies to when type standard */
  logo_alignment?: "left" | "center";
  /** The minimum button width, in pixels. The maximum width is 400 pixels. */
  width?: string;
  /** The pre-set locale of the button text. If it's not set, the browser's default locale or the Google session user’s preference is used. */
  locale?: string;
}

interface CredentialResponse {
  /** google ID token as a base64-encoded JSON Web Token (JWT) string. */
  credential: string;
  /**
   * which flow was used to get the credential response.
   *
   * @see https://developers.google.com/identity/gsi/web/reference/js-reference#select_by */
  select_by: string;
}

interface Initialize {
  client_id?: string;
  callback: (response: CredentialResponse) => void;
}

interface Window {
  google?: {
    accounts: {
      /**
       * minimal typing. see following links for reference / complete interface
       * @see https://developers.google.com/identity/gsi/web/reference/html-reference
       * @see https://developers.google.com/identity/gsi/web/reference/js-reference#GsiButtonConfiguration
       */
      id: {
        initialize: (options: Initialize) => void;
        /** render the "sign in" button */
        renderButton: (element: HTMLElement | null, options: GsiButtonConfiguration) => void;
        /** prompt the "One Tap" dialog */
        prompt: () => void;
        /** call when sign out */
        disableAutoSelect: () => void;
      };
    };
  };
}
