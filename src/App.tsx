import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./header";

const App: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <main />
      <footer />
    </Fragment>
  );
};

export default App;
