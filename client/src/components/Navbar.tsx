import React from "react";
import logo from "../images/logo.png";
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link , useNavigate } from "react-router-dom";
import { State } from "../app/rootReducer";
import power from "../images/power.svg";
import user from "../images/user.svg";
import settings from "../images/settings.svg";

export default function () {
    const profile = JSON.parse(localStorage.getItem("profile") as string);
    const { quantity } = useSelector((state: State) => state.cart);
    const navigate = useNavigate();

    function toggleDropdown(){
        document.querySelector(".dropdown")?.classList.toggle("hidden");
    }

    function signOut(){
        localStorage.clear();
        navigate("/");
    }

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
                        {
                            !profile ? <Link aria-label="auth" to="/auth">
                                <FaUser className="icon user" />
                            </Link> : null
                        }
                    </div>
                    {
                        profile ? <div className="avatar" onClick={toggleDropdown} >
                            <img src={profile.picture} alt="avatar" />
                            <div className="dropdown hidden">
                                <div className="orders">
                                    <img src={user} alt="" />
                                    <Link to="/" >Orders</Link>
                                </div>
                                <div className="settings">
                                    <img src={settings} alt="" />
                                    <Link to="/" >Settings</Link>
                                </div>
                                <div className="sign-out" onClick={signOut} >
                                    <img src={power} alt="" />
                                    <h3>Sign out</h3>
                                </div>
                            </div>
                        </div> : null
                    }
                    <div className="cart">
                        <Link aria-label="cart" to="/cart">
                            <FaShoppingCart className="icon cart-icon" />
                            <div className="num">
                                {
                                    quantity
                                }
                            </div>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}