import React from "react";
import logo from "../images/logo.png";
import { Outlet } from "react-router-dom";

export default function () {
    return (
        <>
            <section id="auth">
                <Outlet />
            </section>
        </>
    )
}