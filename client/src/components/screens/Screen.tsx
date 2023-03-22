import React from "react";
import { Link } from "react-router-dom";
import hp from "../images/hp.jpg";
import { FaStar } from "react-icons/fa";
import { Screen } from "../../@types/types";
import { useDispatch } from "react-redux";
import { addToCart } from "../../app/actionCreators/cartActionCreators";

export default function ({ name, id, description, pictures, price, rating }: Screen) {
    const dispatch: any = useDispatch();

    function add(){
        dispatch(addToCart({
            name,
            id,
            pictures,
            price,
            quantity:1
        }))
    }

    return (
        <div className="product">
            <div className="left">
                <Link to={`/product/${id}`} >
                    <img src={pictures[0]} alt="" />
                </Link>
            </div>
            <div className="right">
                <Link to={`/product/${id}`} className="name">{name}</Link>
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
                    <button onClick={add} >Add to cart</button>
                </div>
                <button onClick={add} className="mobile-btn">Add to cart</button>
            </div>
        </div>
    )
}