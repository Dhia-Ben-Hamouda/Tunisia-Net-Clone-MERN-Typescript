import React from "react";
import Navbar from "../components/Navbar";
import DesktopFilter from "../components/computers/DesktopFilter";
import Product from "../components/Product";

export default function(){
    return(
        <>
            <Navbar/>
            <section id="computers">
                <div className="wrapper">
                    <DesktopFilter />
                    <div className="products">
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </div>
                </div>
            </section>
        </>
    )
}