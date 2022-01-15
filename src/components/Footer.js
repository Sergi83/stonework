import React from "react";

// get text
import { content } from "../content/content";

// get links
import { externalLinks } from "../content/links";


const Footer = () => {
  // get text from content
  const { footer } = content;
  const { textP } = footer;

  // get data from links
  const { templated, fotogrph } = externalLinks;

  return (
    <>
      <p>
        {textP[0]}
        <a href={fotogrph.link}>
          {fotogrph.text}
        </a>
        {textP[1]}
        <a href={templated.link} rel="nofollow">
          {templated.text}
        </a>
        {textP[2]}
      </p>
    </>
  );
};

export default Footer;
