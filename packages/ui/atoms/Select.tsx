import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  value: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
}

export default function Select({ value, onChange, children, className }: Props) {
  return (
    <Container className={className} value={value} onChange={onChange}>
      {children}
    </Container>
  );
}

const Container = styled.select`
  cursor: pointer;
  -webkit-appearance: button;
  -moz-appearance: button;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -webkit-padding-end: 20px;
  -moz-padding-end: 20px;
  -webkit-padding-start: 2px;
  -moz-padding-start: 2px;
  color: ${(props) => props.theme.color.text.primary};
  background-color: ${(props) => props.theme.color.accent}; //Fallback color if gradients are not supported
  /*
    background-image: url(../images/select-arrow.png), -webkit-linear-gradient(top, #E5E5E5, #F4F4F4); // For Chrome and Safari
    background-image: url(../images/select-arrow.png), -moz-linear-gradient(top, #E5E5E5, #F4F4F4); // For old Firefox (3.6 to 15)
    background-image: url(../images/select-arrow.png), -ms-linear-gradient(top, #E5E5E5, #F4F4F4); // For pre-releases of Internet Explorer  10
    background-image: url(../images/select-arrow.png), -o-linear-gradient(top, #E5E5E5, #F4F4F4); // For old Opera (11.1 to 12.0)
    background-image: url(../images/select-arrow.png), linear-gradient(to bottom, #E5E5E5, #F4F4F4); // Standard syntax; must be last
    */
  background-position: center right;
  background-repeat: no-repeat;
  border: 1px solid #aaa;
  border-radius: 2px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  font-size: inherit;
  margin: 0;
  overflow: hidden;
  padding-top: 2px;
  padding-bottom: 2px;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
