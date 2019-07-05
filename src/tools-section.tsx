import React, { useState } from "react";
import styled from "styled-components";
import ReactSVG from "react-svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FormattedMessage } from "react-intl";

import HeroGifUri from "./assets/hero3.gif";

import ReactIcon from "./assets/icons/react-brands.svg";
import VueIcon from "./assets/icons/vuejs-brands.svg";
import AngularIcon from "./assets/icons/angular-brands.svg";
import SassIcon from "./assets/icons/sass-brands.svg";
import JenkinsIcon from "./assets/icons/jenkins-brands.svg";
import JiraIcon from "./assets/icons/jira-brands.svg";
import GitIcon from "./assets/icons/git-alt-brands.svg";
import NodeJSIcon from "./assets/icons/node-js-brands.svg";
import JavaIcon from "./assets/icons/java-brands.svg";
import LinuxIcon from "./assets/icons/linux-brands.svg";
import DockerIcon from "./assets/icons/docker-brands.svg";
import CSS3Icon from "./assets/icons/css3-alt-brands.svg";
import JSIcon from "./assets/icons/js-square-brands.svg";
import HTMLIcon from "./assets/icons/html5-brands.svg";
import PostgreSQLIcon from "./assets/icons/postgres.svg";
import MySQLIcon from "./assets/icons/mysql.svg";
import ElectronIcon from "./assets/icons/electron.svg";
import WebpackIcon from "./assets/icons/webpack.svg";
import ExpressIcon from "./assets/icons/express.svg";
import MongoDBIcon from "./assets/icons/mongodb.svg";
import BabelIcon from "./assets/icons/babel.svg";
import TypeScriptIcon from "./assets/icons/typescript.svg";
import JestIcon from "./assets/icons/jest.svg";
import NPMIcon from "./assets/icons/npm-brands.svg";
import YeomanIcon from "./assets/icons/yeoman.svg";

import { Colors } from "./theme/colors";
import { SectionDivider } from "./section-divider";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface Tool {
  name: string;
  icon?: IconProp;
  iconUrl?: string;
}

const tools: Tool[] = [
  { name: "React & React Native", iconUrl: ReactIcon },
  { name: "Vue", iconUrl: VueIcon },
  { name: "Angular", iconUrl: AngularIcon },
  { name: "Sass", iconUrl: SassIcon },
  { name: "Jenkins", iconUrl: JenkinsIcon },
  { name: "Jira", iconUrl: JiraIcon },
  { name: "Git", iconUrl: GitIcon },
  { name: "MySQL", iconUrl: MySQLIcon },
  { name: "PostgreSQL", iconUrl: PostgreSQLIcon },
  { name: "NodeJS", iconUrl: NodeJSIcon },
  { name: "Java", iconUrl: JavaIcon },
  { name: "Linux", iconUrl: LinuxIcon },
  { name: "Docker", iconUrl: DockerIcon },
  { name: "CSS3", iconUrl: CSS3Icon },
  { name: "JavaScript", iconUrl: JSIcon },
  { name: "HTML", iconUrl: HTMLIcon },
  { name: "Electron", iconUrl: ElectronIcon },
  { name: "Webpack", iconUrl: WebpackIcon },
  { name: "Express", iconUrl: ExpressIcon },
  { name: "MongoDB", iconUrl: MongoDBIcon },
  { name: "Babel", iconUrl: BabelIcon },
  { name: "TypeScript", iconUrl: TypeScriptIcon },
  { name: "Jest", iconUrl: JestIcon },
  { name: "NPM", iconUrl: NPMIcon },
  { name: "Yeoman", iconUrl: YeomanIcon }
];

const StyledSection = styled.section`
  .tools-container {
    background-image: linear-gradient(to right, #47a4f5 0%, #3375ec 100%);
    user-select: none;

    .arrow-container {
      margin: auto 1rem;

      svg {
        cursor: pointer;
        font-size: 3rem;
        color: white;
        filter: drop-shadow(0 0.5rem ${Colors.MAIN});

        transform: scale(1, 1);
        transition: transform 0.05s linear;
        &:hover {
          transform: scale(1.3, 1.3);
          overflow: hidden;
        }
      }
    }

    .icon-container {
      min-height: 16rem;
      margin: auto;
      display: flex;
      flex-direction: column;
      text-align: center;

      div {
        width: 100%;
        height: 100;
        display: flex;
        flex-grow: 1;
      }

      svg {
        color: white;
        font-size: 10rem;
        margin: auto;
        filter: drop-shadow(0 0.5rem ${Colors.MAIN});
      }

      p {
        color: white;
        font-weight: bold;
        font-size: 2rem;
        text-shadow: 0 0.2rem ${Colors.MAIN}, 0 0.3rem ${Colors.MAIN};
      }
    }
  }

  .tools-hero-container {
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

export function ToolsSection() {
  const [iconIndex, setIconIndex] = useState(0);

  const previousIcon = () => setIconIndex(iconIndex === 0 ? tools.length - 1 : iconIndex - 1);
  const nextIcon = () => setIconIndex(iconIndex === tools.length - 1 ? 0 : iconIndex + 1);

  const icon = tools[iconIndex];

  return (
    <StyledSection>
      <SectionDivider />
      <div className="tools-hero-container">
        <div className="text-wrapper">
          <h2 id="tooling">
            <FormattedMessage id="tools-hero-text" />
          </h2>
          <h4>
            <FormattedMessage id="tools-hero-description" />
          </h4>
        </div>
      </div>
      <div className="tools-container flex">
        <div className="arrow-container" onClick={previousIcon}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </div>
        <div className="flex-grow icon-container" data-aos="flip-right" data-aos-delay="150" key={icon.name}>
          {icon.iconUrl && <ReactSVG src={icon.iconUrl} />}
          {icon.icon && <FontAwesomeIcon icon={icon.icon} />}
          <p>{icon.name}</p>
        </div>
        <div className="arrow-container" onClick={nextIcon}>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>
    </StyledSection>
  );
}
