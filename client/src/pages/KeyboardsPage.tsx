import React, { useState } from "react";
import Navbar from "../components/Navbar";
import DesktopFilter from "../components/keyboards/DesktopFilter";
import Product from "../components/computers/Computer";
import Pagination from "../components/Pagination";
import { useEffect } from "react";
import { url } from "../api/baseURL";
import { Keyboard } from "../@types/types";

export default function () {
    const [keyboards, setKeyboards] = useState<Keyboard[]>([]);
    const [params, setParams] = useState({
        page: 1,
        numberOfPages: 1,
        price: [0, 500],
        brand: [],
        wireless: [],
        mechanical: []
    })

    useEffect(() => {
        
    }, [params]);

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
                        {
                            keyboards.map(({ name, _id: id, description, rating, pictures, price }: Keyboard) => {
                                return (
                                    <Product
                                        key={id}
                                        id={id}
                                        name={name}
                                        description={description}
                                        pictures={pictures}
                                        price={price}
                                        rating={rating}
                                    />
                                )
                            })
                        }

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