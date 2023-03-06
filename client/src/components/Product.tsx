import React from "react";
import { Link } from "react-router-dom";
import computer from "../images/computer.jpg";
import hp from "../images/hp.jpg";
import { FaStar } from "react-icons/fa";

export default function () {
    return (
        <div className="product">
            <div className="left">
                <Link to={`/`} >
                    <img src={computer} alt="" />
                </Link>
            </div>
            <div className="middle">
                <Link to={`/`} className="name">Pc Portable HP Victus 15-Fb0022nk / Ryzen 5 5600H / 8 Go / GTX 1650 4G</Link>
                <div className="description">Écran 15.6 " Full HD IPS- Processeur AMD Ryzen 5 5600H, up to 4.2 Ghz, 16 Mo de mémoire cache - Mémoire 8 Go - Disque 512 Go SSD M.2 - Carte graphique Nvidia GeForce GTX 1650, 4 Go de mémoire dédiée - Wifi 6 - Bluetooth 5.2 - Clavier rétroéclairé - SuperSpeed USB Type-C - SuperSpeed USB Type-A - HDMI 2.1 - RJ45 - Lecteur de cartes - Caméra HP Wide Vision HD 720p - Windows 11</div>
                <div className="container">
                    <div className="wrapper">
                        <div className="stars">
                            <FaStar className="star" />
                            <FaStar className="star" />
                            <FaStar className="star" />
                            <FaStar className="star" />
                            <FaStar className="star" />
                            <p>( 4.7 )</p>
                            <div className="price">2119.000 DT</div>
                        </div>
                    </div>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    )
}