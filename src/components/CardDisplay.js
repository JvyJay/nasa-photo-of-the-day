import React from "react";

const CardDisplay = (props) => {
    return (
        <div className="card">
            <img className="img" src={props.hdurl}></img>
            <h1>{props.title}</h1>
            <p>{props.explanation}</p>
            <p>{props.date}</p>
        </div>
    )
}

export default CardDisplay;