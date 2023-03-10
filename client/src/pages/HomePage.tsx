import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import img1 from "../images/ads/img1.jpg";
import img2 from "../images/ads/img2.jpg";
import img3 from "../images/ads/img3.jpg";
import img4 from "../images/ads/img4.jpg";
import img5 from "../images/ads/img5.jpg";
import img6 from "../images/ads/img6.jpg";
import img7 from "../images/ads/img7.jpg";
import img8 from "../images/ads/img8.jpg";

export default function(){
    return(
        <>
            <Navbar/>
            <Carousel/>
            <div className="add-grid">
                <img src={img1} alt="add card" />
                <img src={img2} alt="add card" />
                <img src={img3} alt="add card" />
                <img src={img4} alt="add card" />
                <img src={img5} alt="add card" />
                <img src={img6} alt="add card" />
                <img src={img7} alt="add card" />
                <img src={img8} alt="add card" />
            </div>
        </>
    )
}