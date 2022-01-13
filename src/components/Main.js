import React from "react";
import { Link } from "react-router-dom";

// TODO: make dynamic rendering

const Main = () => {
  return (
    <>
      <div className="title">
        <h3>General-inf</h3>
        <h5>career</h5>
      </div>

      <p>This is StoneWork</p>

      <div className="actions">
        <Link to="/contact" className="button btn-big">Etiam posuere</Link>
      </div>
    </>
  );
};

export default Main;
