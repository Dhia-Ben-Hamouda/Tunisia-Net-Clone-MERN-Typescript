import React from "react";
import logo from "../assets/images/logo.png";
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { State } from "../app/rootReducer";
import power from "../assets/images/power.svg";
import user from "../assets/images/user.svg";
import settings from "../assets/images/settings.svg";
import url from "../api/baseURL";
import { signOut } from "../app/actionCreators/authActionCreators";

export default function () {
    const profile = useSelector((state: State) => state.auth.user);
    const { quantity } = useSelector((state: State) => state.cart);
    const dispatch: any = useDispatch();
    const navigate = useNavigate();

    function toggleDropdown() {
        document.querySelector(".dropdown")?.classList.toggle("hidden");
    }

    function signOutHandler() {
        dispatch(signOut());
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
                            <img src={`${url}/images/users/${profile.picture}`} alt="avatar" />
                            <div className="dropdown hidden">
                                <div className="orders">
                                    <img src={user} alt="" />
                                    <Link to="/" >Orders</Link>
                                </div>
                                <div className="settings">
                                    <img src={settings} alt="" />
                                    <Link to="/" >Settings</Link>
                                </div>
                                <div className="sign-out" onClick={signOutHandler} >
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
            <ul className="mobile-list" >
                <li>
                    <Link className="mobile-link" aria-label="computers" to="/computers">Computers</Link>
                </li>
                <li>
                    <Link className="mobile-link" aria-label="keyboards" to="/keyboards">Keyboards</Link>
                </li>
                <li>
                    <Link className="mobile-link" aria-label="mouses" to="/mouses">Mouses</Link>
                </li>
                <li>
                    <Link className="mobile-link" aria-label="screens" to="/screens">Screens</Link>
                </li>
            </ul>
            <div className="search-wrapper">
                <div className="mobile-search">
                    <div className="circle">
                        <FaSearch className="search" />
                    </div>
                    <input
                        placeholder="search for products"
                    />
                </div>
            </div>
        </>
    )
}