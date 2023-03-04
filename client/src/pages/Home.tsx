import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import img1 from "../images/ads/img1.jpg";
import img2 from "../images/ads/img2.jpg";
import img3 from "../images/ads/img3.jpg";
import img4 from "../images/ads/img4.jpg";
import img5 from "../images/ads/img8.jpg";
import img6 from "../images/ads/img9.jpg";
import img7 from "../images/ads/img10.jpg";
import img8 from "../images/ads/img11.jpg";

export default function(){
    return(
        <>
            <Navbar/>
            <Carousel/>
            <div className="add-grid">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
                <img src={img7} alt="" />
                <img src={img8} alt="" />
            </div>
        </>
    )
}