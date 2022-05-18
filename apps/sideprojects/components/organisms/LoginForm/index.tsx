import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Formik } from "formik";
import { validate, onSubmit } from "./utils";
import { Text, Password } from "ui/atoms/input";
import { Button, Divider } from "ui/atoms";
import GoogleSigninButton from "atoms/GoogleSigninButton";
import Switch from "./Switch";
import { UserContext } from "contexts/User";

type Props = {
  className?: string;
};

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export type Values = typeof initialValues;

export default function LoginForm({ className }: Props) {
  const { handleLoginReponse } = useContext(UserContext);
  const [isSignup, setIsSignup] = useState(false);

  const onFailure = (err: any) => console.log(err);

  return (
    <Formik
      initialValues={initialValues}
      validate={(values) => validate(values, isSignup)}
      onSubmit={(values, helpers) => {
        onSubmit(values, helpers, isSignup, handleLoginReponse);
      }}
    >
      {({ values, errors, status, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <Form onSubmit={handleSubmit} className={className}>
          <Switch isSignup={isSignup} setIsSignup={setIsSignup} />
          <Container>
            <div>
              <div>
                {isSignup && (
                  <Text
                    label="Name"
                    name="name"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    errorText={!!errors.name && !!touched.name && errors.name}
                  />
                )}
                <Text
                  autoFocus
                  name="email"
                  label="Email"
                  type="email"
                  autoComplete="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  errorText={!!errors.email && !!touched.email && errors.email}
                />
                <Password
                  name="password"
                  label="Password"
                  autoComplete={isSignup ? "new-password" : "current-password"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  errorText={!!errors.password && !!touched.password && errors.password}
                />
                {isSignup && (
                  <Password
                    label="Password (again)"
                    name="confirmPassword"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmPassword}
                    errorText={!!errors.confirmPassword && !!touched.confirmPassword && errors.confirmPassword}
                  />
                )}
                {!isSignup && (
                  <ForgotPasswordContainer>
                    <ForgotPasswordLink tabIndex={-1} href="">
                      Forgot password?
                    </ForgotPasswordLink>
                  </ForgotPasswordContainer>
                )}
              </div>

              <SubmitSection>
                <SubmitButton type="submit" disabled={isSubmitting}>
                  {isSignup ? "Sign up" : "Sign In"}
                </SubmitButton>
              </SubmitSection>

              <Divider text="or" />
              <GoogleSection>
                <GoogleSigninButton />
              </GoogleSection>
            </div>
          </Container>
        </Form>
      )}
    </Formik>
  );
}

const Form = styled.form`
  box-shadow: ${(props) => props.theme.shadow[0]};
`;

const ForgotPasswordContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ForgotPasswordLink = styled.a`
  margin-left: 1em;
  font-size: ${(props) => props.theme.font.size.xsmall};
`;

const SubmitButton = styled(Button)`
  display: block;
  width: 250px;
`;

const Container = styled.div`
  background-color: ${(props) => props.theme.color.paper};
  box-shadow: ${(props) => props.theme.shadow[3]};
  display: flex;
  padding: 2rem 2rem 2rem 2rem;
  justify-content: center;
`;

const SubmitSection = styled.div`
  margin: 1rem 0 1.5rem 0;
  display: flex;
  justify-content: center;
`;

const GoogleSection = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
`;
