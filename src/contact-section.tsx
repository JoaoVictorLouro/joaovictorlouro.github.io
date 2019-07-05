import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { Colors } from "./theme/colors";
import GithubSVG from "./assets/icons/github.svg";
import LinkedInSVG from "./assets/icons/linkedin.svg";
import ReactSVG from "react-svg";
import { FormattedMessage } from "react-intl";

const StyledSection = styled.section`
  margin-bottom: 3rem;
  background-color: rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0.2rem rgba(0, 0, 0, 0.3), 0 0.1rem rgba(255, 255, 255, 0.3);
  color: white;
  padding: 2rem;

  svg {
    font-size: 3rem;
    margin: 0.5rem;
    filter: drop-shadow(0 0.4rem ${Colors.MAIN});
  }

  h3 {
    text-shadow: 0 0.2rem ${Colors.MAIN};
  }
`;

export function ContactSection() {
  return (
    <StyledSection id="contact">
      <div className="flex justify-end">
        <h3 className="w-100 text-center my-auto mx-2 uppercase"><FormattedMessage id="contact"/>: </h3>
        <a href="https://github.com/joaovictorlouro">
          <ReactSVG src={GithubSVG} />
        </a>
        <a href="https://www.linkedin.com/in/joão-victor-freitas-louro-b1ab11129">
          <ReactSVG src={LinkedInSVG} />
        </a>
        <a href="mailto:jvictor.louro@gmail.com">
          <FontAwesomeIcon icon={faEnvelopeSquare} />
        </a>
      </div>
    </StyledSection>
  );
}
