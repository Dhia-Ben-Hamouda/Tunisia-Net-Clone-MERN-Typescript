import React from "react";
import logo from "../images/logo.png";
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function () {
    return (
        <>
            <nav>
                <Link aria-label="home" to="/">
                    <img className="logo" src={logo} alt="logo" />
                </Link>
                <ul className="desktop-list" >
                    <li>
                        <Link aria-label="computers" to="/computers">Computers</Link>
                    </li>
                    <li>
                        <Link aria-label="keyboards" to="/keyboards">Keyboards</Link>
                    </li>
                    <li>
                        <Link aria-label="mouses" to="/mouses">Mouses</Link>
                    </li>
                    <li>
                        <Link aria-label="screens" to="/screens">Screens</Link>
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
                        <Link aria-label="auth" to="/auth">
                            <FaUser className="icon user" />
                        </Link>
                    </div>
                    <div className="cart">
                        <Link aria-label="cart" to="/cart">
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