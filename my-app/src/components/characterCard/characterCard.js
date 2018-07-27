import React from "react";
import "./characterCard.css";

let characterCard= props => (
    <div className="card" value={props.id} onClick={() => props.handleClick(props.id)}>
    <div className="img-box">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default characterCard;