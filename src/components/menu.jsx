import React from "react";
import { Link } from "react-router-dom";

const Menu = props => {
  return (
    <>
      <Link to="/" className="btn btn-secondary">
        HOME
      </Link>
    </>
  );
};

export default Menu;
