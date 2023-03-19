import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { url } from "../api/baseURL";
import { Product } from "../@types/types";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../app/actionCreators/cartActionCreators";

export default function () {
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null);
    const dispatch: any = useDispatch();

    function add(){
        dispatch(addToCart({
            name:product?.name,
            id:product?._id,
            pictures:product?.pictures,
            price:product?.price,
            quantity:1
        }))
    }

    useEffect(() => {
        async function fetchProduct() {
            const response = await fetch(`${url}/products/getProduct/${id}`);
            const data = await response.json();

            setProduct(data);
        }
        fetchProduct();
    }, [id]);


    return (
        <>
            <Navbar />
            <section id="product-details">
                <div className="product-container">
                    <div className="left">
                        <div className="pictures">
                            <img src={product?.pictures[0]} className="main-picture" />
                        </div>
                    </div>
                    <div className="right">
                        <h1>{product?.name}</h1>
                        <p>{product?.description}</p>
                        <div className="wrapper">
                            <div className="stars">
                                <FaStar className="star" />
                                <FaStar className="star" />
                                <FaStar className="star" />
                                <FaStar className="star" />
                                <FaStar className="star" />
                                <p>( 4.8 )</p>
                            </div>
                        <button onClick={add} >Add to cart</button>
                        </div>
                            <h3 className="price">{product?.price.toFixed(3)} DT</h3>
                    </div>
                </div>
                <div className="reviews-container">

                </div>
            </section>
        </>
    )
}