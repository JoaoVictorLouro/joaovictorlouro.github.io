import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  text-align: center;
  color: #6760ff;
  margin: 2.5rem 0;

  &.svg-inline--fa.fa-w-16 {
    width: 100%;
  }
`;
export function SectionDivider() {
  return <StyledIcon icon={faEllipsisH} className="section-divider" />;
}
