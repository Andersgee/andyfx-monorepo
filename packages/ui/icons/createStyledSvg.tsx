import React from "react";
import styled from "styled-components";
import iconstyle from "../theme/iconstyle";

type ComponentProps = {
  className?: string;
};

export default function createStyledSvg(Svg: React.FC<React.SVGProps<SVGSVGElement>>) {
  const Container = styled(Svg)`
    ${iconstyle}
  `;

  const Component = ({ className }: ComponentProps, ref: React.ForwardedRef<SVGSVGElement>) => {
    return <Container className={className} ref={ref} data-icon />;
  };

  return React.memo(React.forwardRef(Component));
}
