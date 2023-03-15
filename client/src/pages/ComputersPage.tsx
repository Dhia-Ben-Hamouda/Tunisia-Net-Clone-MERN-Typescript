import React, { useState } from "react";
import Navbar from "../components/Navbar";
import DesktopFilter from "../components/computers/DesktopFilter";
import Product from "../components/computers/Computer";
import Pagination from "../components/Pagination";
import { useEffect } from "react";
import { url } from "../api/baseURL";
import { Computer } from "../@types/types";
import { useDispatch, useSelector } from "react-redux";
import { fetchComputers } from "../app/actionCreators/computerActionCreators";
import { State } from "../app/rootReducer";
import Skeletons from "../components/ProductLoader";

export default function () {
    const dispatch: any = useDispatch();
    const { computers , loading , numberOfPages } = useSelector((state: State) => state.computers);
    const [params, setParams] = useState({
        page:1,
        price:[0,4000],
        brand:[],
        procesor:[],
        storage:[],
        memory:[],
        graphicsCard:[]
    })

    useEffect(()=>{
        console.log(params);
        dispatch(fetchComputers(params));
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
                            !loading ? computers?.map(({name, _id: id, description, rating, pictures, price }: Computer) => {
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
                            }) : <Skeletons />
                        }
                        
                    </div>
                </div>
                <div className="pagination">
                    <Pagination
                        page={params.page}
                        pages={numberOfPages}
                        setParams={setParams}
                    />
                </div>
            </section>
        </>
    )
}