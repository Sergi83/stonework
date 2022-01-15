import React from 'react';
import { Link } from 'react-router-dom';
import { content } from '../content/content';


const Banner = () => {
  // get banner object from content
  const { banner: { title, subtitle, buttonLink } } = content;

  return (
    <div id="banner">

      <div className="title">
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
      </div>

      <div className="actions">
        <Link to={buttonLink} className="a button btn-big">
          Etiam posuere
        </Link>
      </div>

    </div>
  );
};

export default Banner;
