import React from "react";
import styled from "styled-components";
import classnames from "classnames";

const StyledDiv = styled.div`
  margin: 1rem;
  padding: 1rem;
  box-shadow: 0 0.5rem rgba(0, 0, 0, 0.2);
  background-color: #679dff;
  color: rgba(0, 0, 0, 0.7);
`;

export function Card({
  children,
  className,
  ...props
}: {
  children?: React.ReactNode[];
  className?: string;
  props?: any;
}) {
  return (
    <StyledDiv className={classnames("card rounded-lg flex", className)} {...props}>
      {children}
    </StyledDiv>
  );
}
