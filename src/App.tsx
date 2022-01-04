import React from "react";
import GlobalStyle from "./globalStyles";
import { Dashboard } from "./pages/Dashboard/dashboard";
import Routes from "./routes";

export function App() {
  return (
    <>
      <GlobalStyle/>
      <Routes />
    </>
  );
}
