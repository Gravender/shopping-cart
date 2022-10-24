import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  const navStyle = {
    color: "white",
  };
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link style={navStyle} to="/">
          <li>home</li>
        </Link>
        <Link style={navStyle} to="/shop">
          <li>shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
