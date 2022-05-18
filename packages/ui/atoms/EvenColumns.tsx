import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  className?: string;
}

/**
 * Flex container with all direct childs same width.
 */
export default function EvenColumns({ children, className }: Props) {
  return <Container className={className}>{children}</Container>;
}

const Container = styled.div`
  display: flex;
  //flex-direction: row;
  > * {
    flex: 1 1 100%;
  }
`;
