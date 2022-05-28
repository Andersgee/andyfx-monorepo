import { FormikHelpers } from "formik";
import { Values } from "./index";
import api from "lib/api";

export function validate(values: Values, isSignup?: boolean) {
  const errors: Partial<Values> = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid";
  }

  if (!values.password) {
    errors.password = "Required";
  }

  if (isSignup) {
    if (!values.name) {
      errors.name = "Required";
    } else if (values.name.length < 3) {
      errors.name = "Too short";
    }
  }

  return errors;
}

export async function onSubmit(
  values: Values,
  helpers: FormikHelpers<Values>,
  isSignup: boolean,
  onSuccess?: (res: Response) => void,
  onFailure?: (error: any) => void
) {
  try {
    const route = isSignup ? "/auth/signup" : "/auth";
    const res = await api.post_res(route, values);
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
