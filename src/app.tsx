import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { Header } from "./header";
import { HeroSection } from "./hero-section";
import { ProfileSection } from "./profile-section";
import { StatsSection } from "./stats-section";
import { SkillsSection } from "./skills-section";
import { ToolsSection } from "./tools-section";
import { ContactSection } from "./contact-section";
import { ExperienceSection } from "./experience-section";
import { IntlProvider, addLocaleData } from "react-intl";

const StyledMain = styled.main`
  padding-top: 3.7rem;
  overflow-x: hidden;

  @media only screen and (min-width: 768px) {
    .profile-media-container,
    .stats-media-container {
      width: 100%;
      display: flex;
    }
  }
`;

function App({ setLanguage }: { setLanguage: (locale: string) => void }) {
  return (
    <Fragment>
      <Header setLanguage={setLanguage} />
      <StyledMain>
        <HeroSection />
        <div className="profile-media-container">
          <ProfileSection />
        </div>
        <div className="stats-media-container">
          <StatsSection />
        </div>
        <SkillsSection />
        <ToolsSection />
        <ExperienceSection />
        <ContactSection />
      </StyledMain>
      <footer />
    </Fragment>
  );
}

const InternationalizedApp = function() {
  const [messages, setMessages] = useState(null);
  const [locale, setLocale] = useState("en");

  useEffect(() => {
    const supportedLanguaes: { [key: string]: string } = { pt: "pt", "pt-BR": "pt", en: "en" };
    const language = navigator.language;
    let locale = supportedLanguaes[language] || "en";

    import(`react-intl/locale-data/${locale}`)
      .then(localeData => addLocaleData(localeData.default))
      .then(() => {
        fetch(`/lang/${locale}.json`).then(async messages => {
          setLocale(locale);
          setMessages(await messages.json());
        });
      });
  }, []);

  const setLanguage = async (locale: string) => {
    const messages = await (await fetch(`/lang/${locale}.json`)).json();
    addLocaleData((await import(`react-intl/locale-data/${locale}`)).default);
    setLocale(locale);
    setMessages(messages);
  };

  if (!messages) {
    return null;
  }

  return (
    <IntlProvider locale={locale} messages={messages}>
      <App setLanguage={setLanguage} />
    </IntlProvider>
  );
};

export default InternationalizedApp;
