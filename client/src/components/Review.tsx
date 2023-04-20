import React from "react";
import hp from "../assets/images/hp.jpg";
import { Rating } from "@mui/material";

export default function () {
    return (
        <>
            <div className="review">
                <img src={hp} alt="" />
                <div className="wrapper">
                    <div className="top">
                        <h3>Dhia Ben Hamouda</h3>
                        <p>yesterday at 7.52 PM</p>
                    </div>
                    <Rating value={4} readOnly />
                    <div className="content">
                        <p>Great product</p>
                    </div>
                </div>
            </div>
        </>
    )
}