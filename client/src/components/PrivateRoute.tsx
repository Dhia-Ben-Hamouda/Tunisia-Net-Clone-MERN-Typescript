import React from "react";
import { useSelector } from "react-redux";
import { State } from "../app/rootReducer";
import { Outlet, Navigate } from "react-router-dom";

export default function () {
    const user = useSelector((state: State) => state.auth.user);

    return (
        <>
            {
                user ? <Outlet /> : <Navigate to="/" />
            }
        </>
    )
}