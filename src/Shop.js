import React from "react";
import Card from "./components/card";
function Shop(props) {
  const { products } = props;
  return (
    <div className="Shop">
      {products.map((product) => (
        <Card
          key={product.id}
          id={product.id}
          title={product.title}
          imgSrc={product.imgSrc}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default Shop;
