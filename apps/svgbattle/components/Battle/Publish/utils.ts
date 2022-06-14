import { FormikHelpers } from "formik";
import { Values } from "./CreateTargetForm";
import api from "lib/api";

export function validate(values: Values) {
  const errors: Partial<Values> = {};

  if (!values.title) {
    errors.title = "Required";
  } else if (values.title.length < 3) {
    errors.title = "Too short";
  }

  return errors;
}

export async function onSubmit(
  values: Values,
  helpers: FormikHelpers<Values>,
  onSuccess?: (res: Response) => void,
  onFailure?: (error: any) => void
) {
  try {
    const res = await api.post_res("/target", values);
    if (res.ok) {
      onSuccess && onSuccess(res);
      helpers.resetForm();
    } else {
      const errormessages = await res.json();
      helpers.setErrors(errormessages);
      onFailure && onFailure(res);
    }
  } catch (error) {
    onFailure && onFailure(error);
  } finally {
    helpers.setSubmitting(false);
  }
}

/**
 * returns something like this
 * ```js
 * [' width="10"', ' height="10"', ' fill="green"', ' cx="10"', ' stroke="#f00"']
 * ```
 */
function attributesArray(str: string) {
  const regex = /\s(\w+?)="(.+?)"/g;
  return str.match(regex);
}

/**
 * extract attribute values from markup string
 *
 * for svg colors, use
 * ```
 * keywords = ["fill", "stroke"];
 * ```
 */
export function attributeValues(str: string, keywords: string[]) {
  const array = attributesArray(str);
  if (!array) {
    return [];
  }

  //grab only fill and stroke attributes
  //const keywords = ["fill", "stroke"];
  const filtered = array.filter((atr) => keywords.some((word) => atr.startsWith(` ${word}`)));

  //get value part and remove quotes
  const values = filtered.map((v) => v.split("=")[1].replaceAll('"', ""));
  return values;
}
