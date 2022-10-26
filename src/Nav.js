import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  const navStyle = {
    color: "#BBB193",
  };
  const showCart = () => {
    let cart = document.getElementById("shoppingCart");
    if (cart.classList.contains("visible")) {
      cart.classList.remove("visible");
    } else {
      cart.classList.add("visible");
    }
  };
  return (
    <div>
      {" "}
      <nav>
        <h1 className="navTitle">Shopping Cart</h1>
        <ul className="nav-links">
          <Link style={navStyle} to="/">
            <li>home</li>
          </Link>
          <Link style={navStyle} to="/shop">
            <li>shop</li>
          </Link>
          <li onClick={() => showCart()}>cart</li>
        </ul>
      </nav>
      <div id="shoppingCart" className="shoppingCart">
        <div onClick={() => showCart()} className="blankArea"></div>
        <div className="Cart"></div>
      </div>
    </div>
  );
}

export default Nav;
