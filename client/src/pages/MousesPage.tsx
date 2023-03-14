import React, { useState } from "react";
import Navbar from "../components/Navbar";
import DesktopFilter from "../components/mouses/DesktopFilter";
import Product from "../components/computers/Computer";
import Pagination from "../components/Pagination";
import { useEffect } from "react";
import { url } from "../api/baseURL";
import { Mouse } from "../@types/types";

export default function () {
    const [mouses , setMouses] = useState<Mouse[]>([]);
    const [params, setParams] = useState({
        page:1,
        numberOfPages:1,
        price:[0,4000],
        brand:[],
        wireless:[]
    })

    useEffect(()=>{
        async function fetchData(){
            try{
                const response = await fetch(`${url}/mouses/getPaginatedMouses?params=${JSON.stringify(params)}`);
                const data = await response.json();

                setMouses(data.mouses);
            }catch(err){
                console.error(err);
            }
        }
        fetchData();
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
                            mouses.map(({name, _id: id, description, rating, pictures, price }: Mouse) => {
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