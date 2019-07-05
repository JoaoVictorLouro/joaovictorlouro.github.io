import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faUserCircle,
  faChartBar,
  faChartLine,
  faToolbox,
  faClock,
  faCommentAlt
} from "@fortawesome/free-solid-svg-icons";
import { FormattedMessage, injectIntl } from "react-intl";
import classnames from "classnames";

import BrazilImg from "./assets/icons/brazil.png";
import UnitedStatesImg from "./assets/icons/united-states.png";

import { Colors } from "./theme/colors";

const StyledHeader = styled.header`
  background-color: ${Colors.MAIN};
  position: fixed;
  width: 100%;
  height: 3.7rem;
  color: ${Colors.WHITE};
  font-size: 1.3rem;
  padding: 0.5em;
  z-index: 9999;
  user-select: none;

  label {
    cursor: pointer;
  }
  & nav {
    display: flex;
    background-color: ${Colors.MAIN};

    #menu-toggle:not(:checked) + label {
      & + h1 + .blur + ul {
        transform: scaleY(0);

        ul {
          border-top: none;
          box-shadow: none;
        }

        li {
          opacity: 0;
          transition: opacity 100ms ease-in-out;
        }
      }
    }

    #menu-toggle:not(:checked) + label + h1 + .blur {
      transform: scaleY(0);
      opacity: 0;
    }

    .bars-icon {
      display: none;
    }

    .close-icon {
      display: unset;
    }

    #menu-toggle:not(:checked) + label .close-icon {
      display: none;
    }

    #menu-toggle:not(:checked) + label .bars-icon {
      display: unset;
    }

    .blur {
      position: absolute;
      top: 3.7rem;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: black;
      transform: scaleY(1);
      opacity: 0.7;
      backdrop-filter: blur(9px);
      transition: opacity 200ms ease-in-out;
    }

    h1 {
      margin: auto 0.7em;
      font-weight: bold;
      text-align: center;
      width: 100%;
    }

    ul {
      border-top: 2px solid rgba(255, 255, 255, 0.3);
      position: absolute;
      top: 100%;
      left: 0;
      background-color: ${Colors.MAIN};
      width: 100%;
      margin: 0;
      transform: scaleY(1);
      transform-origin: top;
      transition: transform 300ms ease-in-out;
      box-shadow: 0 0.4rem 0.2rem rgba(0, 0, 0, 0.6);

      .language-container {
        background-color: rgba(0, 0, 0, 0.3);
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        box-shadow: inset 0 0.2rem rgba(0, 0, 0, 0.3);
        padding: 1rem 2rem;

        .language-flag {
          height: 4rem;
          width: auto;
          margin-right: 1.5rem;
          filter: grayscale();
          cursor: pointer;
          transition: transform 100ms ease-in;
          transform: scale(1, 1);

          &:hover {
            transform: scale(1.3, 1.3);
          }

          &.selected {
            filter: unset;
          }
        }
      }
    }
    li {
      font-size: 1.5rem;
      margin: 0.3rem 0;
      padding: 0 1rem;
      cursor: pointer;
      opacity: 1;
      transition: opacity 300ms ease-in-out 200ms;

      :hover {
        background-color: #41223b;
      }

      svg {
        margin-right: 0.5rem;
      }
    }
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 1.8rem;
  margin: auto;
  height: 100%;
  padding-bottom: 8px;
`;

function HeaderWithIntl({ intl, setLanguage }: { intl: { locale: string }; setLanguage: (locale: string) => void }) {
  const closeMenu = () => {
    (document.getElementById("menu-toggle") as HTMLInputElement).checked = false;
  };

  const locale = intl.locale;

  return (
    <StyledHeader>
      <nav>
        <input id="menu-toggle" type="checkbox" className="hidden" />
        <label htmlFor="menu-toggle">
          <StyledIcon className="bars-icon" icon={faBars} />
          <StyledIcon className="close-icon" icon={faTimes} />
        </label>
        <h1>
          <FormattedMessage id="header-text" />
        </h1>
        <div className="blur" onTouchStart={closeMenu} />
        <ul>
          <li>
            <a href="#profile" onClick={closeMenu}>
              <FontAwesomeIcon icon={faUserCircle} /> <FormattedMessage id="menu-profile" />
            </a>
          </li>
          <li>
            <a href="#stats" onClick={closeMenu}>
              <FontAwesomeIcon icon={faChartBar} />
              <FormattedMessage id="menu-stats" />
            </a>
          </li>
          <li>
            <a href="#skills" onClick={closeMenu}>
              <FontAwesomeIcon icon={faChartLine} />
              <FormattedMessage id="menu-skills" />
            </a>
          </li>
          <li>
            <a href="#tooling" onClick={closeMenu}>
              <FontAwesomeIcon icon={faToolbox} />
              <FormattedMessage id="menu-tooling" />
            </a>
          </li>
          <li>
            <a href="#experience" onClick={closeMenu}>
              <FontAwesomeIcon icon={faClock} />
              <FormattedMessage id="menu-experience" />
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              <FontAwesomeIcon icon={faCommentAlt} />
              <FormattedMessage id="menu-contact" />
            </a>
          </li>
          <div className="language-container">
            <h3>
              <FormattedMessage id="menu-language-selection" />
            </h3>
            <div className="flex my-3">
              <img
                className={classnames("language-flag", locale === "pt" && "selected")}
                src={BrazilImg}
                alt="portuguese"
                onClick={() => setLanguage("pt")}
              />
              <img
                className={classnames("language-flag", locale === "en" && "selected")}
                src={UnitedStatesImg}
                alt="english"
                onClick={() => setLanguage("en")}
              />
            </div>
          </div>
        </ul>
      </nav>
    </StyledHeader>
  );
}

export const Header = injectIntl(HeaderWithIntl);
