import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Formik } from "formik";
import { validate, onSubmit } from "./utils";
import { Text, Password } from "@andyfx/ui/atoms/input";
import { Button, Divider } from "@andyfx/ui/atoms";
import GoogleSigninButton from "atoms/GoogleSigninButton";
import Switch from "./Switch";
import { UserContext } from "contexts/User";
import { useRouter } from "next/router";

type Props = {
  className?: string;
};

const initialValues = {
  name: "",
  email: "",
  password: "",
};

export type Values = typeof initialValues;

export default function LoginForm({ className }: Props) {
  const router = useRouter();
  const { signup } = router.query;
  const isSignup = signup == "1" ? true : false;

  const { getMyUser } = useContext(UserContext);

  const setSignupQuery = (bool: boolean) => {
    // ?signup=1 if true, nothing otherwise
    const query = bool ? { signup: "1" } : undefined;
    router.push({ pathname: router.pathname, query }, undefined, {
      scroll: false,
    });
  };

  const onFailure = (err: any) => console.log(err);

  return (
    <Formik
      initialValues={initialValues}
      validate={(values) => validate(values, isSignup)}
      onSubmit={(values, helpers) => {
        onSubmit(values, helpers, isSignup, getMyUser);
      }}
    >
      {({ values, errors, status, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <Form onSubmit={handleSubmit} className={className}>
          <Switch isSignup={isSignup} setSignupQuery={setSignupQuery} />
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
              </div>

              <SubmitSection>
                <SubmitButton type="submit" disabled={isSubmitting}>
                  {isSignup ? "Sign up" : "Sign In"}
                </SubmitButton>
              </SubmitSection>

              <HelpContainer>
                {isSignup ? (
                  <HelpButton type="button" onClick={() => setSignupQuery(false)}>
                    Already have an account?
                  </HelpButton>
                ) : (
                  <HelpButton type="button">Forgot password?</HelpButton>
                )}
              </HelpContainer>

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

const HelpContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const HelpButton = styled.button`
  font-size: ${(props) => props.theme.font.size.xsmall};
  font-weight: ${(props) => props.theme.font.weight.regular};
  text-transform: none;
  color: ${(props) => props.theme.color.text.primary};

  :hover {
    text-decoration: underline 1px dotted;
  }
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
  margin: 1rem 0 0.5rem 0;
  display: flex;
  justify-content: center;
`;

const GoogleSection = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
`;
