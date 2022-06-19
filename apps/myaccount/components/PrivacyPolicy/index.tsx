import React from "react";
import styled from "styled-components";
import { H1, H2, H3 } from "components/Headings";
import { Link } from "@andyfx/ui/atoms";

type Props = {
  className?: string;
};

export default function PrivacyPolicy({ className }: Props) {
  return (
    <Container className={className}>
      <H1>{`Privacy Policy`}</H1>
      <p>
        This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you
        can delete your information.
      </p>

      <H2>Cookies</H2>
      <p>
        Cookies are small pieces of text sent to your browser by a website you visit. They help that website remember
        information about your visit.
      </p>
      <H3>How Andyfx uses cookies</H3>
      <p>Andyfx uses cookies to remember you, so that you dont have to manually sign in every time you visit a site.</p>

      <H2>Things you create or provide to us</H2>
      <p>
        When you create an Andyfx account, you provide us with <Link href="/personal-info">personal information</Link>{" "}
        such as name and email
      </p>
      <p>We also store the content you create, upload, or receive from others when using our services.</p>

      <H2>Deleting your information</H2>
      <p>
        You can <Link href="/delete-account"> delete your account</Link>.
      </p>
    </Container>
  );
}

const Container = styled.div``;

const Note = styled.p`
  font-weight: ${(props) => props.theme.font.weight.light};
  margin-left: 3ch;
  max-width: 50ch;
`;
