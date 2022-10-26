import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function Product() {
  let { id } = useParams();
  useEffect(() => {
    fetchItem();
  });
  const [item, setItem] = useState({ images: {} });
  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${id}`
    );
    const item = await fetchItem.json();
    setItem(item.data.item);
  };
  return (
    <div className="product" key={item.itemId}>
      <h1>{item.name}</h1>
      <img src={item.images.icon} alt="" />
    </div>
  );
}

export default Product;
