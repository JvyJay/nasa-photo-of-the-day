import React, { useEffect, useState } from "react";
import axios from "axios";
import CardDisplay from './CardDisplay';

export default function NasaList() {
    const [stuff, setStuff] = useState([]);

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=3w3gdd7IiFhHMRlcQ74LlovtOXFMxu9ZKTZKG5Dr`, {
            params: {}
        })
            .then(res => {
                console.log(res.data);
                setStuff(res.data);
            })
            .catch(error => {
                console.log("Error: No Data Has Been Returned", error);
            });
    }, []);

    return (
        <div className="cardContainer">
            <CardDisplay
                key={stuff.index}
                hdurl={stuff.hdurl}
                title={stuff.title}
                explanation={stuff.explanation}
                date={stuff.date} />
        </div>
    );
}