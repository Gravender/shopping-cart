import React, { useState, useEffect } from "react";
import Card from "./components/card";
function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);
  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    const data = await fetch(
      `https://fortnite-api.theapinetwork.com/upcoming/get`
    );
    const items = await data.json();
    setItems(items.data);
    console.log(items.data);
  };
  return (
    <div className="Shop">
      {items.map((item) => (
        <Card
          key={item.itemId}
          id={item.itemId}
          title={item.item.name}
          imgSrc={item.item.images.icon}
        />
      ))}
    </div>
  );
}

export default Shop;
