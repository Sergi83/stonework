import React from "react";
import { content } from "../content/content";
import { Link } from "react-router-dom";

// TODO: make dynamic images' rendering

const About = () => {
  // get data object from content
  const { about } = content;
  const { title, subtitle, boxes } = about;

  return (
    <div id="three-column">
      <div className="title">
        <h3>{title}</h3>
        <h5>{subtitle}</h5>
      </div>

      {/* render boxes */}
      {boxes.map(({ name, imgSrc, imgAlt, textP, buttonLink }, index) => {
        return (
          <div className={name} key={index}>
            <img src={imgSrc} alt={imgAlt} />
            <p className="toggle_text_overflow">{textP}</p>
            <div className="actions">
              <Link to={buttonLink} className="a button">
                More Info
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default About;
