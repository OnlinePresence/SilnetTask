import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card_container">
      <img src={props.image} className="card_image" />
      <h4 className="card_title">{props.title}</h4>
      <p className="card_text">{props.text}</p>
      <a href="" className="card_button">
        Czytaj dalej
      </a>
    </div>
  );
};
export default Card;
