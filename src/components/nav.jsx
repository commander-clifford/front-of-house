import React from "react";
import { Link } from "react-router-dom";

const Nav = props => {
  return (
    <>
      <Link to="/" className="btn btn-secondary">
        Home
      </Link>
      <Link to="/sign-up" className="btn btn-secondary">
        Sign Up
      </Link>
    </>
  );
};

export default Nav;
