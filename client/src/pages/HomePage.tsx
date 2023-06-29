import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import img1 from "../assets/images/ads/img1.webp";
import img2 from "../assets/images/ads/img2.webp";
import img3 from "../assets/images/ads/img3.webp";
import img4 from "../assets/images/ads/img4.webp";
import img5 from "../assets/images/ads/img5.webp";
import img6 from "../assets/images/ads/img6.webp";
import img7 from "../assets/images/ads/img7.webp";
import img8 from "../assets/images/ads/img8.webp";
import { Toaster } from "react-hot-toast";

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
            <Toaster/>
        </>
    )
}