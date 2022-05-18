import styled from "styled-components";

type Props = {
  text?: string;
  className?: string;
  vertical?: boolean;
};

export default function Divider({ text, vertical = false, className }: Props) {
  if (text) {
    return <HrText>{text}</HrText>;
  }
  return vertical ? <Vr className={className}></Vr> : <Hr className={className} />;
}

const Hr = styled.hr`
  margin: 0.5rem 0 0.5rem 0;
  border: 0;
  border-top: 1px solid ${(props) => props.theme.color.text.disabled};
`;

const Vr = styled.div`
  border-left: 1px solid ${(props) => props.theme.color.text.disabled};
`;

const HrText = styled.div`
  margin: 0.5rem 0 0.5rem 0;
  overflow: hidden;
  text-align: center;

  &:before,
  &:after {
    height: 1px;
    background-color: ${(props) => props.theme.color.text.disabled};
    content: "";
    display: inline-block;
    position: relative;
    vertical-align: middle;
    width: 50%;
  }

  &:before {
    right: 0.5em;
    margin-left: -50%;
  }

  &:after {
    left: 0.5em;
    margin-right: -50%;
  }
`;
