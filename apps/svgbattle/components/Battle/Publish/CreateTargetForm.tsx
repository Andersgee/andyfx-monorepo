import React from "react";
import styled from "styled-components";
import { Formik } from "formik";
import { validate, onSubmit, attributeValues } from "./utils";
import { Text } from "@andyfx/ui/atoms/input";
import { Button } from "@andyfx/ui/atoms";
import type { Target } from "@andyfx/svgbattle-api/src/models/target";
import { useCodeContext } from "contexts/Code";
import { useRouter } from "next/router";

export type Values = Omit<Target, "_id" | "shortId" | "creatorId">;

type Props = {
  disabled?: boolean;
  className?: string;
};

const initialValues: Values = {
  title: "",
  svg: "",
  placeholder: "",
  createdAt: 0,
  modifiedAt: 0,
  width: 240,
  height: 240,
  description: "",
  colors: [],
};

//export type Values = typeof initialValues;

export default function CreateTargetForm({ disabled = false, className }: Props) {
  const router = useRouter();
  const { code, sanitizedCode } = useCodeContext();

  const onSuccess = async (res: Response) => {
    const target = (await res.json()) as Target;
    console.log(target);
    router.push(`/b/${target.shortId}`);
  };
  const onFailure = (err: any) => console.log(err);

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={(values, helpers) => {
        if (code && sanitizedCode) {
          values.svg = sanitizedCode;
          values.colors = attributeValues(sanitizedCode, ["fill", "stroke"]);
          values.createdAt = Date.now();
          values.modifiedAt = Date.now();

          onSubmit(values, helpers, onSuccess);
        } else {
          helpers.setErrors({ svg: "Output is empty" });
        }
        helpers.setSubmitting(false);
      }}
    >
      {({ values, errors, status, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <Form onSubmit={handleSubmit} className={className}>
          <Container>
            <div>
              <div>
                <Text
                  label="Title"
                  name="title"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                  errorText={!!errors.title && !!touched.title && errors.title}
                />

                <Text
                  label="Description"
                  name="description"
                  type="description"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                  errorText={!!errors.description && !!touched.description && errors.description}
                />
              </div>

              <SubmitSection>
                <SubmitButton type="submit" disabled={disabled || isSubmitting}>
                  Create
                </SubmitButton>
              </SubmitSection>

              {!!errors.svg && <ErrorSection>{errors.svg}</ErrorSection>}
              {disabled && <ErrorSection>please sign in first</ErrorSection>}
            </div>
          </Container>
        </Form>
      )}
    </Formik>
  );
}

const ErrorSection = styled.p`
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.color.error};
`;

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
