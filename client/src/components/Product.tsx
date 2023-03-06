import React from "react";
import { Link } from "react-router-dom";
import computer from "../images/computer.jpg";
import hp from "../images/hp.jpg";
import { FaStar } from "react-icons/fa";

export default function(){
    return(
        <div className="product">
            <div className="left">
                <Link to={`/`} >
                    <img src={computer} alt="" />
                </Link>
            </div>
            <div className="middle">
                <Link to={`/`} className="name">Pc Portable HP Victus 15-Fb0022nk / Ryzen 5 5600H / 8 Go / GTX 1650 4G</Link>
                <div className="description">Écran 15.6 " Full HD IPS- Processeur AMD Ryzen 5 5600H, up to 4.2 Ghz, 16 Mo de mémoire cache - Mémoire 8 Go - Disque 512 Go SSD M.2 - Carte graphique Nvidia GeForce GTX 1650, 4 Go de mémoire dédiée - Wifi 6 - Bluetooth 5.2...</div>
                <div className="stars">
                    <FaStar className="star" />
                    <FaStar className="star" />
                    <FaStar className="star" />
                    <FaStar className="star" />
                    <FaStar className="star" />
                    <p>( 4.7 )</p>
                </div>
            </div>
            <div className="right">

            </div>
        </div>
    )
}