import React from "react";
import Navbar from "../components/Navbar";
import DesktopFilter from "../components/computers/DesktopFilter";

export default function(){
    return(
        <>
            <Navbar/>
            <section id="computers">
                <div className="wrapper">
                    <DesktopFilter />
                    <div className="products">
                        
                    </div>
                </div>
            </section>
        </>
    )
}