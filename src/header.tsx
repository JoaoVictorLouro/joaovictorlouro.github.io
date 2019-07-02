import React from "react";

import ProfilePictureUrl from "./assets/profile-picture.png";

export function Header() {
  return (
    <header>
      <div className="">
        <img src={ProfilePictureUrl} className="profile-picture" />
        <div>
          <h1>João Louro</h1>
          <p>
            Full-stack software engineer, focused on SPA/PWA and Microservices; JavaScript enthusiast and game
            development hobbyist{" "}
          </p>
          <div>
            <p>Maringá, Paraná, Brazil</p>
            <p>jvictor.louro@gmail.com</p>
          </div>
          <div className="social-links" />
        </div>
        <p />
      </div>
    </header>
  );
}
