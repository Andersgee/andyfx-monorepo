import React from "react";
import styled from "styled-components";
import type { Target } from "targets";

type Props = {
  target: Target;
  className?: string;
};

export default function Colors({ target, className }: Props) {
  return (
    <Container className={className}>
      <div>
        <div>colors</div>
        {target.colors.map((color) => (
          <Row key={color}>
            <svg width="12px" height="12px" viewBox="0 0 10 10">
              <rect width="10" height="10" fill={color} />
            </svg>
            <Text>{`${color}`}</Text>
          </Row>
        ))}
      </div>
    </Container>
  );
}

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.div`
  margin-left: 0.25rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
