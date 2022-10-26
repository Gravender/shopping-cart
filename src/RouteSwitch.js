import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./Shop";
import Nav from "./Nav";
import Product from "./components/product";
import createProducts from "./object-handler/createProducts";
import "./style.css";

const RouteSwitch = () => {
  const products = createProducts();
  const [cart, setCart] = useState([]);
  const addToCart = (id) => {
    if (cart.find((product) => product.productId === id)) {
      setCart(
        cart.map((product) => {
          if (product.productId === id) {
            product.quantity = product.quantity + 1;
          }
          return product;
        })
      );
    } else {
      setCart(cart.concat({ productId: id, quantity: 1 }));
    }
  };
  const changeCart = (newCart) => {
    setCart(newCart);
  };
  return (
    <BrowserRouter>
      <Nav cart={cart} changeCart={changeCart} products={products} />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop products={products} />} />
        <Route
          path="/shop/:id"
          element={<Product products={products} addToCart={addToCart} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
