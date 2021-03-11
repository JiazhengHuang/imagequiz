import React from "react";
import Flower from "../data.js";
import "./Home.css";

function Home() {
    return (
        <>
            <ul className="imgUL">
                {Flower.map((obj) => (
                    <li>
                        <img src={obj.picture} alt={obj.name}></img>
                        <br />
                        {obj.name}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Home;
