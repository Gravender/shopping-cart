import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Cart = (props) => {
  const { cart, changeCart, products } = props;
  const [subTotal, setsubTotal] = useState(0);
  useEffect(() => {
    let newCart = cart.map((cartItem) => {
      let price = products.find(
        (product) => product.id === cartItem.productId
      ).price;
      return price * cartItem.quantity;
    });
    setsubTotal(
      newCart.reduce((partialSum, a) => partialSum + a, 0).toFixed(2)
    );
  }, [cart, products]);
  const changeCartItem = (value, id) => {
    let newCart = cart.map((product) => {
      if (product.productId === id) {
        product.quantity = parseInt(value);
      }
      return product;
    });
    changeCart(newCart);
  };
  const changeCartItemQuantity = (value, id) => {
    let newCart = cart.map((product) => {
      if (product.productId === id) {
        if (product.quantity + value >= 1) {
          product.quantity = product.quantity + value;
        }
      }
      return product;
    });
    changeCart(newCart);
  };
  const removeCartItem = (id) => {
    let newCart = cart.filter((product) => product.productId !== id);
    changeCart(newCart);
  };
  const createCartItem = (findID, quantity) => {
    const found = products.find((product) => product.id === findID);
    let temp = quantity;
    if (found) {
      return (
        <div className="cartItem">
          <Link className="cardLink cartItemImg" to={`/shop/${findID}`}>
            <img className="cartItemImg" src={found.imgSrc} alt="" />
          </Link>
          <div className="cartItemInfo">
            <h1 className="cartItemTitle">{found.title}</h1>
            <p className="cartItemPrice">{found.price} USD</p>
            <div className="cartItemQuantityDiv">
              <button
                className="cartItemButton"
                onClick={() => changeCartItemQuantity(-1, findID)}
              >
                -
              </button>
              <input
                className="cartItemQuantity"
                type="number"
                value={temp}
                min="1"
                onChange={(e) => changeCartItem(e.target.value, findID)}
              />
              <button
                className="cartItemButton"
                onClick={() => changeCartItemQuantity(1, findID)}
              >
                +
              </button>
            </div>
            <button onClick={() => removeCartItem(findID)}>Remove</button>
          </div>
        </div>
      );
    }
    return null;
  };
  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      {cart.map((product) => (
        <div key={product.productId} className="cartItem">
          {createCartItem(product.productId, product.quantity)}
        </div>
      ))}
      {subTotal > 0 ? (
        <div>
          <span>Subtotal: ${subTotal}</span>
          <button>Checkout</button>
        </div>
      ) : (
        <div>
          <h2>No items in the cart</h2>
        </div>
      )}
    </div>
  );
};
export default Cart;
