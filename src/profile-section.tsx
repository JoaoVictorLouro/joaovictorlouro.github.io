import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";

import ProfilePictureUrl from "./assets/profile-picture.png";
import { Colors } from "./theme/colors";

const StyledSection = styled.section`
  padding: 1.3em 0 0 0;
  color: ${Colors.MAIN};
  margin-top: -8rem;

  & .profile-picture {
    width: 24em;
    background-color: #96877f;
    box-shadow: 0px -0.5em rgba(0, 0, 0, 0.3);
    border: 0.6rem solid ${Colors.MAIN};
  }

  .profile-content {
    padding-top: 9rem;
    margin-top: -9rem;
    background-color: #fffbf3;
    border-radius: 1rem 1rem 0 0;
    padding-bottom: 0.5rem;
    border-top: 0.5rem solid ${Colors.MAIN};
  }

  .contact-info {
    border-top: 0.2em solid rgba(0, 0, 0, 0.2);
    margin: auto 1.6em;
    padding-top: 1.2em;
  }

  h1 {
    border-bottom: 0.1em solid;
    text-shadow: 0 0.2rem #a290ac;
    margin-top: 0;
  }

  p {
    font-size: 1.6em;
    text-align: justify;
    margin: auto 1em 1em 1em;
  }

  svg {
    margin-right: 1em;
  }
`;

export function ProfileSection() {
  const bday = new Date(1995, 10, 15).getTime();
  const today = new Date().getTime();
  const difference = today - bday;
  const differenceInYears = difference / (365.25 * 24 * 60 * 60 * 1000);
  const age = parseInt(differenceInYears + "", 10);

  return (
    <StyledSection>
      <div className="profile-section animated bounceInDown">
        <img id="profile" src={ProfilePictureUrl} alt="profile" className="profile-picture rounded-full m-auto" />
        <div className="profile-content">
          <h1 className="text-center m-5">João Louro ({age})</h1>
          <p className="mb-3">
            <FormattedMessage id="profile-description" />
          </p>
          <div className="contact-info">
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <FormattedMessage id="profile-location" />
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} />
              jvictor.louro@gmail.com
            </p>
          </div>
          <div className="social-links" />
        </div>
      </div>
    </StyledSection>
  );
}
