import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
function Product(props) {
  const { products, addToCart } = props;
  let { id } = useParams();
  useEffect(() => {
    fetchItem();
  });
  const [product, setProduct] = useState({ images: {} });
  const fetchItem = async () => {
    if (products.find((product) => product.id === id)) {
      setProduct(products.find((product) => product.id === id));
    }
  };
  return (
    <div className="product" key={product.id}>
      <img className="productImg" src={product.imgSrc} alt="" />
      <div className="productInfo">
        <h1 className="productTitle">{product.title}</h1>
        <p className="productPrice">{product.price} USD</p>
        <button onClick={() => addToCart(id)}>Add To Cart</button>
        <Link className="cardLink cardTitle" to={`/shop/`}>
          {"< Go Back"}
        </Link>
      </div>
    </div>
  );
}

export default Product;
