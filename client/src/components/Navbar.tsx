import React from "react";
import logo from "../images/logo.png";
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function () {
    return (
        <>
            <nav>
                <Link to="/">
                    <img className="logo" src={logo} />
                </Link>
                <ul className="desktop-list" >
                    <li>
                        <Link to="/computers">Computers</Link>
                    </li>
                    <li>
                        <Link to="/keyboards">Keyboards</Link>
                    </li>
                    <li>
                        <Link to="/mouses">Mouses</Link>
                    </li>
                    <li>
                        <Link to="/screens">Screens</Link>
                    </li>
                </ul>
                <div className="container">
                    <div className="search-container">
                        <div className="circle">
                            <FaSearch className="search" />
                        </div>
                        <input
                            placeholder="search for products"
                        />
                    </div>
                    <div className="user">
                        <Link to="/auth">
                            <FaUser className="icon user" />
                        </Link>
                    </div>
                    <div className="cart">
                        <Link to="/cart">
                            <FaShoppingCart className="icon cart-icon" />
                            <div className="num">
                                0
                            </div>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}