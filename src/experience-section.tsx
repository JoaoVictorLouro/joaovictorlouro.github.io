import React from "react";
import styled from "styled-components";
import { Colors } from "./theme/colors";
import { SectionDivider } from "./section-divider";
import { Card } from "./card";
import { FormattedMessage } from "react-intl";

const StyledSection = styled.section`
  .listing {
    margin-bottom: 0.3rem;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 6px;
    border-bottom: 0.2rem dashed rgba(0, 0, 0, 0.3);
  }

  .card {
    margin-bottom: 0;
  }

  > h2 {
    color: ${Colors.MAIN};
    text-shadow: 0 0.2rem #a290ac;
    text-align: center;
    padding-top: 2rem;
    padding-bottom: 2rem;
    border-bottom: 0.1rem solid white;
    box-shadow: 0 0.3rem rgba(0, 0, 0, 0.4);
    background: white;
  }

  h3 {
    font-weight: bold;
    text-transform: uppercase;
  }
  .listing > h3 {
    margin: auto 0.3rem;
    padding: 0.6rem;
    background-color: rgba(0, 0, 0, 0.3);
    color: white;
    border-radius: 8px;
  }
`;
export function ExperienceSection() {
  return (
    <StyledSection id="experience">
      <SectionDivider />
      <h2>
        <FormattedMessage id="experience" />:
      </h2>
      <Card className="flex-col" data-aos="zoom-in-out" data-aos-delay="150">
        <div className="listing">
          <h3>
            <FormattedMessage id="experience-period-now" />
          </h3>
          <div>
            <h3>Objective Solutions</h3>
            <h4 className="role">
              <FormattedMessage id="experience-full-stack-developer" />
            </h4>
          </div>
        </div>
        <div className="listing">
          <h3>2016</h3>
          <div>
            <h3>Benner</h3>
            <h4 className="role">
              <FormattedMessage id="experience-full-stack-developer" />
            </h4>
          </div>
        </div>
        <div className="listing">
          <h3>2014</h3>
          <div>
            <h3>DB1 Global Software</h3>
            <h4 className="role">
              <FormattedMessage id="experience-full-stack-developer" />
            </h4>
          </div>
        </div>
      </Card>
      <SectionDivider />
    </StyledSection>
  );
}
