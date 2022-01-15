import React from "react";
import { Link } from "react-router-dom";

// get main content
import { content } from "../content/content";

// get links
import { externalLinks } from "../content/links";


const Main = () => {
  // get data object from content
  const { generalInf } = content;
  const { title, subtitle, textP, buttonLink } = generalInf;

  // get data from links
  const { siteName, templated, fotogrph, cca } = externalLinks;

  return (
    <>
      <div className="title">
        <h3>{title}</h3>
        <h5>{subtitle}</h5>
      </div>

      <p>
        {textP[0]}
        <strong>{siteName}</strong>
        {textP[1]}
        <a href={templated.link} rel="nofollow">
          {templated.text}
        </a>
        {textP[2]}
        <a href={fotogrph.link}>
          {fotogrph.text}
        </a>
        {textP[3]}
        <a href={cca.link}>
          {cca.text}
        </a>
        {textP[4]}
      </p>

      <div className="actions">
        <Link to={buttonLink} className="button btn-big">
          Etiam posuere
        </Link>
      </div>
    </>
  );
};

export default Main;
