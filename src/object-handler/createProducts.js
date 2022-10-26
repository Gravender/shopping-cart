import uniqid from "uniqid";
import diver from "../images/diver.jpg";
import laketree from "../images/laketree.jpg";
import lion from "../images/lion.jpg";
import map from "../images/map.jpg";
import ocean from "../images/ocean.jpg";
import sand from "../images/sand.jpg";
import sunset from "../images/sunset.jpg";
import tractor from "../images/tractor.jpg";
import wheel from "../images/wheel.jpg";
function createProducts() {
  const products = [
    {
      imgSrc: diver,
      title: "Diver",
      price: "35.24",
      id: "l9pdfglhk5n",
    },
    {
      imgSrc: laketree,
      title: "Laketree",
      price: "35.24",
      id: "l9plhkhjgf5n",
    },
    {
      imgSrc: lion,
      title: "Lion",
      price: "35.24",
      id: "l9sdfplhk5n",
    },
    {
      imgSrc: map,
      title: "Map",
      price: "35.24",
      id: "l9plhlkihk5n",
    },
    {
      imgSrc: ocean,
      title: "Ocean",
      price: "35.24",
      id: "l9plhrtyk5n",
    },
    {
      imgSrc: sand,
      title: "Sand",
      price: "35.24",
      id: "l9plbnmhk5n",
    },
    {
      imgSrc: sunset,
      title: "Sunset",
      price: "35.24",
      id: "l9sdfgplhk5n",
    },
    {
      imgSrc: tractor,
      title: "Tractor",
      price: "8,500.24",
      id: "l9plhdfghk5n",
    },
    {
      imgSrc: wheel,
      title: "Wheel",
      price: "25.00",
      id: "l9adsplhk5n",
    },
  ];
  return products;
}
export default createProducts;
