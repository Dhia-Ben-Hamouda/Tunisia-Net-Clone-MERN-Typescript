import React, { useState } from "react";
import Navbar from "../components/Navbar";
import DesktopFilter from "../components/computers/DesktopFilter";
import Product from "../components/Product";
import Pagination from "../components/Pagination";
import { useEffect } from "react";
import { url } from "../api/baseURL";
import { Computer } from "../@types/types";

export default function () {
    const [computers , setComputers] = useState<Computer[]>([]);
    const [params, setParams] = useState({
        page:1,
        numberOfPages:1,
        price:[0,4000],
        brand:["HP", "Asus", "Dell"],
        procesor:["AMD Ryzen 5", "AMD Ryzen 7", "Intel Core i5", "Intel Core i7"],
        storage:["1TB + 256GB SSD" , "1TB SSD" , "512GB SSD"],
        memory:["8 gb", "16 gb", "24 gb", "32 gb"],
        graphicsCard:["GTX 1650" , "RTX 3050" , "RTX 3050 ti"]
    })

    useEffect(()=>{
        async function fetchData(){
            try{
                const response = await fetch(`${url}/computers/getPaginatedComputers?params=${JSON.stringify(params)}`);
                const data = await response.json();

                console.log(data);
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