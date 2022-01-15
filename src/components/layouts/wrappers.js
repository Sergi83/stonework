import React from "react";


export const HeaderLayout = ({ children }) => {
  return (
    <header id="header-wrapper">
      <div className="container" >{children}</div>
    </header>
  );
};

export const AboutLayout = ({ children }) => {
  return (
    <section id="about" className="wrapper">
      <div className="container">{children}</div>
    </section>
  );
};

export const GeneralInfLayout = ({ children }) => {
  return (
    <section id="general-inf">
      <div className="container">{children}</div>
    </section>
  );
};

export const FooterLayout = ({ children }) => {
  return (
    <footer id="copyright">
      <div className="container">{children}</div>
    </footer>
  );
};