import React from 'react';
import { Link } from 'react-router-dom';

// TODO: make dynamic rendering


const Banner = () => {
  return (
    <div id="banner">

      <div className="title">
        <h2>Maecenas luctus lectus</h2>
        <h4>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</h4>
      </div>

      <div className="actions">
        <Link to="/contact" className="button btn-big">
          Etiam posuere
        </Link>
      </div>

    </div>
  );
};

export default Banner;
