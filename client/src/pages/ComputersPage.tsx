import React, { useState } from "react";
import Navbar from "../components/Navbar";
import DesktopFilter from "../components/computers/DesktopFilter";
import Product from "../components/Product";
import Pagination from "../components/Pagination";

export default function () {
    const [page, setPage] = useState(1);
    const [numOfPages, setNumOfPages] = useState(5);
    const [priceRange, setPriceRange] = useState([0, 5000]);
    const [params, setParams] = useState({
        page,
        priceRange
    })

    return (
        <>
            <Navbar />
            <section id="computers">
                <div className="wrapper">
                    <DesktopFilter
                        priceRange={priceRange}
                        setPriceRange={setPriceRange}
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
                    <Pagination
                        page={page}
                        pages={numOfPages}
                        setPage={setPage}
                    />
                </div>
            </section>
        </>
    )
}