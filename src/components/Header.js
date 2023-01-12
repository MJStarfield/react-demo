import { Link } from "react-router-dom";
import React from "react";

const Header = () => {
  return (
    <div>
      <div className="homepage-links">
        <Link className="react-link" to="/">
          Home
        </Link>
        <Link className="react-link" to="/about">
          About
        </Link>
        <Link className="react-link" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
