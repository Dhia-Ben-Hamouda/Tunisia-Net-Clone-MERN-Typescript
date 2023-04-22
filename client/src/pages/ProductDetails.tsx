import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import url from "../api/baseURL";
import { Product } from "../@types/types";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../app/actionCreators/cartActionCreators";
import { Rating, TextField } from "@mui/material";
import Review from "../components/Review";
import { State } from "../app/rootReducer";
import toast ,{ Toaster } from "react-hot-toast";

export default function () {
    const token = localStorage.getItem("token") as string;
    const [product, setProduct] = useState<Product | null>(null);
    const [rating , setRating] = useState(3);
    const [content , setContent] = useState("");
    const dispatch: any = useDispatch();
    const { id } = useParams();

    function add() {
        dispatch(addToCart({
            name: product?.name,
            id: product?._id,
            pictures: product?.pictures,
            price: product?.price,
            quantity: 1
        }))
        toast.success("product added to cart" , {position:"bottom-center"});
    }

    useEffect(() => {
        async function fetchProduct() {
            const response = await fetch(`${url}/products/getProduct/${id}`);
            const data = await response.json();

            setProduct(data);
        }
        fetchProduct();
    }, [id]);

    async function submitHandler(e: React.FormEvent){
        e.preventDefault();

        console.log(token);

        const response = await fetch(`${url}/reviews/insertReview` , {
            method:"POST",
            headers:{
                "content-type":"application/json",
                "Authorization":`Bearer ${token}`
            },
            body:JSON.stringify({
                content,
                rating
            })
        });
        const data = await response.json();

        console.log(data);
    }

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
                                <p>( {product?.rating ? product.rating : "unrated"} )</p>
                            </div>
                            <button onClick={add} >Add to cart</button>
                        </div>
                        <h3 className="price">{product?.price.toFixed(3)} DT</h3>
                    </div>
                </div>
                <div className="reviews-container">
                    {
                        product?.reviews?.length ? <>
                            <h1>Product Reviews</h1>
                            <div className="line"></div>
                            <div className="reviews">
                                {
                                    product.reviews.map(({ _id, }) => {
                                        return (
                                            <Review

                                            />
                                        )
                                    })
                                }
                            </div>
                        </> : null
                    }
                </div>
                <div className="form-wrapper">
                    <Rating value={rating} onChange={(e, val: any) => setRating(val)} size="large" color="#FCC312" />
                    <form autoComplete="off" onSubmit={submitHandler} >
                        <TextField value={content} onChange={e => setContent(e.target.value)} className="field" label="Write review..." rows={4} multiline={window.innerWidth > 680 ? false : true} />
                        <button>Send review</button>
                    </form>
                </div>
                <Toaster/>
            </section>
        </>
    )
}