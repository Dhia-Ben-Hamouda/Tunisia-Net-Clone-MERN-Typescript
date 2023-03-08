import React, { useState } from "react";
import Navbar from "../components/Navbar";
import DesktopFilter from "../components/computers/DesktopFilter";
import Product from "../components/Product";
import Pagination from "../components/Pagination";
import { useEffect } from "react";

export default function () {
    const [params, setParams] = useState({
        page:1,
        numberOfPages:1,
        price:[0,4000],
        brand:[],
        procesor:[],
        storage:[],
        memory:[],
        graphicsCard:[]
    })

    useEffect(()=>{
        console.log(params);
    } , [params]);

    return (
        <>
            <Navbar />
            <section id="computers">
                <div className="wrapper">
                    <DesktopFilter
                        params={params}
                        setParams={setParams}
                    />
                    <div className="products">
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </div>
                </div>
                <div className="pagination">
                    {/* <Pagination
                        page={page}
                        pages={numOfPages}
                        setPage={setPage}
                    /> */}
                </div>
            </section>
        </>
    )
}