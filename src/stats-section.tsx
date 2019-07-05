import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FormattedMessage } from "react-intl";

import { Card } from "./card";
import { SectionDivider } from "./section-divider";

const StyledSection = styled.section`
  margin: 0 0.5rem;

  .card:first-of-type {
    margin-top: 0;
  }

  .card:last-of-type {
    margin-bottom: 0;
  }

  .card {
    p {
      margin: auto 1.5em;
      font-size: 0.8rem;
      flex-grow: 1;
      text-transform: uppercase;
      font-weight: bold;

      &.stat-number {
        margin: 0;
        font-size: 2.5rem;
      }
    }

    svg {
      font-size: 5em;
      margin: auto;
      opacity: 0.3;
    }
  }
`;

function Stat({ stat, description, icon, aos }: { stat: number; description: string; icon: IconProp; aos: string }) {
  return (
    <Card data-aos={aos} data-aos-delay="150">
      <p className="stat-number">+{padToTwo(stat)}</p>
      <p>
        <FormattedMessage id={description} />
      </p>
      <FontAwesomeIcon icon={icon} />
    </Card>
  );
}

function padToTwo(number: number | string) {
  if (number <= 9999) {
    number = ("0" + number).slice(-2);
  }
  return number;
}

export function StatsSection() {
  return (
    <StyledSection id="stats">
      <SectionDivider />
      <Stat icon={faCode} stat={10} description="coding-time-description" aos="fade-left" />
      <Stat icon={faBriefcase} stat={4} description="experience-time-description" aos="fade-right" />
      <Stat icon={faProjectDiagram} stat={20} description="projects-worked-on" aos="fade-left" />
    </StyledSection>
  );
}
