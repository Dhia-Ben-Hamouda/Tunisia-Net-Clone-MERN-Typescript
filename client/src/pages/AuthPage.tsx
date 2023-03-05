import React from "react";
import logo from "../images/logo.png";
import { Outlet } from "react-router-dom";

export default function () {
    return (
        <>
            <section id="auth">
                <div className="left-section">
                    <img src={logo} alt="" />
                </div>
                <Outlet />
            </section>
        </>
    )
}