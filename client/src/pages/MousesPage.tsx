import React, { useState } from "react";
import Navbar from "../components/Navbar";
import DesktopFilter from "../components/mouses/DesktopFilter";
import Product from "../components/computers/Computer";
import Pagination from "../components/Pagination";
import { useEffect } from "react";
import { url } from "../api/baseURL";
import { Mouse } from "../@types/types";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../app/rootReducer";
import { fetchMouses } from "../app/actionCreators/mouseActionCreators";
import ProductLoader from "../components/ProductLoader";

export default function () {
    const dispatch: any = useDispatch();
    const { loading , mouses , numberOfPages } = useSelector((state: State) => state.mouses);
    const [params, setParams] = useState({
        page:1,
        price:[0,4000],
        brand:[],
        wireless:[]
    })

    useEffect(()=>{
        dispatch(fetchMouses(params));
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
                        {
                            !loading ? mouses.map(({name, _id: id, description, rating, pictures, price }: Mouse) => {
                                return(
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
                            }) : <ProductLoader/>
                        }
                        
                    </div>
                </div>
                <div className="pagination">
                    <Pagination
                        page={params.page}
                        pages={numberOfPages}
                        setParams={setParams}
                        params={params}
                    />
                </div>
            </section>
        </>
    )
}