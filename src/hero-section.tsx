import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FormattedMessage } from "react-intl";

import HeroGifUri from "./assets/hero.gif";
import { Colors } from "./theme/colors";

const StyledSection = styled.section`
  & .hero-container {
    background-image: url(${HeroGifUri});
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #674014;
    background-attachment: fixed;
    background-blend-mode: screen;
    height: 35rem;
    display: flex;

    .text-wrapper {
      padding: 0.4em;
      margin: auto;
      text-align: center;
    }

    h2 {
      font-weight: bold;
      font-size: 3em;
    }
    h4 {
      font-size: 2em;
    }

    svg {
      font-size: 4em;
      color: ${Colors.MAIN};
    }

    h2,
    h4 {
      color: white;
      text-shadow: 0.1em 0.1em ${Colors.MAIN}, 0 0 0.8em #1d3145, 0 0 0.4em #1d3145, 0 0 0.5em #1d3145;
      margin: auto;
    }
  }
`;

export function HeroSection() {
  return (
    <StyledSection>
      <div className="hero-container">
        <div className="text-wrapper">
          <h2>
            <FormattedMessage id="main-hero-text" />
          </h2>
          <h4>
            <FormattedMessage id="main-hero-subtitle" />
          </h4>
          <FontAwesomeIcon icon={faAngleDown} className="animated infinite slideOutDown" />
        </div>
      </div>
    </StyledSection>
  );
}
