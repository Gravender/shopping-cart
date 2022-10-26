import React from "react";
import { Link } from "react-router-dom";
const Card = (props) => {
  const { id, imgSrc, title } = props;
  const price = 35.25;
  return (
    <div key={id} className="Card">
      <Link className="cardLink cardImg" to={`/shop/${id}`}>
        <img className="cardImg" src={imgSrc} alt="" />
      </Link>
      <div className="CardInfo">
        <Link className="cardLink cardTitle" to={`/shop/${id}`}>
          {title}
        </Link>
        <p className="cardPrice">{price} USD</p>
      </div>
    </div>
  );
};
export default Card;
