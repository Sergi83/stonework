import React from "react";
import { Link } from "react-router-dom";

// TODO: make dynamic rendering

const About = () => {

  return (
    <div id="three-column">
      <div className="title">
        <h3>About</h3>
        <h5>3</h5>
      </div>
      
      <div className="box">
        <img src="" alt="" />
        <p className="toggle_text_overflow"></p>
        <div className="actions">
          <Link to="/contact" className="a button btn-white">
            More Info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
