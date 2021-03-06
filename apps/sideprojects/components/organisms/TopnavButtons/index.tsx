import React from "react";
import styled from "styled-components";
import { Tooltip, Link } from "@andyfx/ui/atoms";
import { ToggleThemeButton } from "@andyfx/ui/molecules";
import { PersonIcon } from "@andyfx/ui/icons";

type Props = {
  className?: string;
  username?: string;
};

export default function TopnavButtons({ username, className }: Props) {
  return (
    <Container className={className}>
      <Tooltip placement="bottom" label="Toggle theme">
        <ToggleThemeButton />
      </Tooltip>
      <Tooltip placement="bottom-end" label={username || "Profile"}>
        <IconLink href="/profile" label="Profile">
          <PersonIcon />
        </IconLink>
      </Tooltip>
    </Container>
  );
}

const IconLink = styled(Link)`
  //display: block;
`;

const Container = styled.div`
  display: flex;
  padding-right: 1px;
  //padding-top: 1px;
`;
