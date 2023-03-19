import React from "react";
import { Link } from "react-router-dom";
import hp from "../images/hp.jpg";
import { FaStar } from "react-icons/fa";
import { Keyboard } from "../../@types/types";

export default function ({ name, id, description, pictures, price, rating }: Keyboard) {
    return (
        <div className="product">
            <div className="left">
                <Link to={`/`} >
                    <img src={pictures[0]} alt="" />
                </Link>
            </div>
            <div className="right">
                <Link to={`/`} className="name">{name}</Link>
                <div className="description">{description.slice(0 , 300)}...</div>
                <div className="container">
                    <div className="wrapper">
                        <div className="stars">
                            <FaStar className="star" />
                            <FaStar className="star" />
                            <FaStar className="star" />
                            <FaStar className="star" />
                            <FaStar className="star" />
                            <p>( {rating !== 0 ? rating : "unrated"} )</p>
                            <div className="price">{price.toFixed(3)} DT</div>
                        </div>
                    </div>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    )
}