import React from "react";
import styled from "styled-components";
import { Tooltip, Link } from "ui/atoms";
import ToggleThemeButton from "ui/molecules/ToggleThemeButton";
import PersonIcon from "ui/icons/Person";

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
          <PersonIcon name={username} />
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
