import { languages } from "@andyfx/ui/atoms/Code";

export function removeFirstWord(str: String) {
  const newline = str.indexOf("\n");
  if (newline >= 0) {
    //use the newline if exist
    return str.substring(newline + 1);
  }

  const space = str.indexOf(" ");
  if (space === -1) {
    return "";
  }
  return str.substring(space + 1);
}

export function langFromText(str: string) {
  for (const lang of languages) {
    if (str.startsWith(lang)) {
      return lang;
    }
  }
  return "";
}
