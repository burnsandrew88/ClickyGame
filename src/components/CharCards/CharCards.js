import React from "react";
import "./CharCards.css";

const CharCards = (props) => (
    <div className="card" onClick={props.imageClick}>
        <div className="img-container">
            <img alt={props.image.replace(".jpg", ".jpeg", "")} src={require("../../images/" + props.image)} height="140" width="190"/>
        </div>
    </div>
);

export default CharCards;