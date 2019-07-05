import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import { Colors } from "./theme/colors";

import HeroGifUri from "./assets/hero2.gif";
import BrazilIcon from "./assets/icons/brazil.png";
import UnitedStatesIcon from "./assets/icons/united-states.png";
import FranceIcon from "./assets/icons/france.png";
import JapanIcon from "./assets/icons/japan.png";

import { SectionDivider } from "./section-divider";

const StyledSection = styled.section`
  .language-container {
    padding: 1rem;

    h4 {
      color: white;
      text-shadow: 0.1em 0.1em ${Colors.MAIN};
      margin: auto;
      text-align: center;
      font-size: 2em;
    }

    .flag {
      width: auto;
      height: 4rem;
    }

    .flex .skill-bar {
      margin: auto 0.7rem;

      .skill-bar-out {
        height: 0.5rem;
      }
    }
  }

  .skills-container,
  .language-container {
    background-image: linear-gradient(to right, ${Colors.MAIN} 0%, #4c4067 100%);
  }

  .skills-container {
    width: 100%;
    padding: 0.5em;
    font-size: 1.1rem;
    font-weight: bold;

    p {
      color: white;
      margin-left: 14px;
    }

    .skill-bar {
      margin: 0.2em 0.3em;
    }

    .skill-bar-out {
      width: 100%;
      height: 1rem;
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: 0.7rem;
      box-shadow: inset 0 0.15rem rgba(0, 0, 0, 0.8);

      div {
        height: 100%;
        overflow: hidden;
        text-align: left;
        border-radius: 0.7rem;
        background-color: #f3a2c4;
        position: relative;

        &:after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-size: 100%;
          opacity: 0.4;
          background-image: linear-gradient(
            45deg,
            #fff 25%,
            rgba(0, 0, 0, 0) 25%,
            rgba(0, 0, 0, 0) 50%,
            #fff 50%,
            #fff 75%,
            rgba(0, 0, 0, 0) 75%,
            rgba(0, 0, 0, 0) 100%
          );
          background-size: 15px 15px;
          animation: skill-bar-animation 1s infinite linear;
        }

        @keyframes skill-bar-animation {
          0% {
            background-position: 0 100%;
          }
          100% {
            background-position: 15px 100%;
          }
        }
      }
    }
  }

  .skills-hero-container {
    background-image: url(${HeroGifUri});
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #141c67;
    background-attachment: fixed;
    background-blend-mode: screen;
    height: 15rem;
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

function SkillBar({
  translateLabel,
  label,
  amount,
  size,
  aos
}: {
  translateLabel?: string;
  label?: string;
  amount: number;
  size: number;
  aos: string;
}) {
  return (
    <div className="skill-bar" style={{ width: `${size}%` }} data-aos={aos} data-aos-delay="150">
      <p>{translateLabel ? <FormattedMessage id={translateLabel} /> : label}</p>
      <div className="skill-bar-out">
        <div style={{ width: `${amount}%` }} />
      </div>
    </div>
  );
}
export function SkillsSection() {
  return (
    <StyledSection id="skills">
      <SectionDivider />
      <div className="skills-hero-container">
        <div className="text-wrapper">
          <h2>
            <FormattedMessage id="skills-hero-text" />
          </h2>
          <h4>
            <FormattedMessage id="skills-hero-description" />
          </h4>
        </div>
      </div>
      <div className="skills-container">
        <div className="flex">
          <SkillBar label="JS" amount={90} aos="fade-left" size={60} />
          <SkillBar label="CSS" amount={65} aos="fade-right" size={40} />
        </div>
        <div className="flex">
          <SkillBar label="HTML" amount={70} aos="fade-left" size={40} />
          <SkillBar label="Node" amount={80} aos="fade-right" size={60} />
        </div>
        <div className="flex">
          <SkillBar translateLabel="skills-tests" amount={70} aos="fade-left" size={60} />
          <SkillBar label="Design" amount={80} aos="fade-right" size={40} />
        </div>
        <div className="flex">
          <SkillBar label="DevOps" amount={40} aos="fade-left" size={40} />
          <SkillBar translateLabel="skills-software-engineering" amount={70} aos="fade-right" size={60} />
        </div>
      </div>
      <div className="language-container">
        <h4 data-aos="fade-in" data-aos-delay="150">
          <FormattedMessage id="skills-language-label" />
        </h4>
        <div className="flex flex-wrap justify-between" data-aos="fade-in" data-aos-delay="150">
          <img src={BrazilIcon} alt="portuguese (brazillian)" className="flag" />
          <img src={UnitedStatesIcon} alt="english" className="flag" />
          <img src={FranceIcon} alt="french" className="flag" />
          <img src={JapanIcon} alt="japanese" className="flag" />
        </div>
      </div>
    </StyledSection>
  );
}
