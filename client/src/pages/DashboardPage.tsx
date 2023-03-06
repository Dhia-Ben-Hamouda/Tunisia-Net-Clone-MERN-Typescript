import React, { useEffect } from "react";
import { useState } from "react";
import { url } from "../api/baseURL";
import { TextField } from "@mui/material";

export default function () {
    const [current, setCurrent] = useState("computers");
    const [filters, setFilters] = useState(["computers", "keyboards", "mouses", "screens"]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`${url}/${current}/getPaginated${current[0].toUpperCase() + current.slice(1)}`);
            const data = await response.json();

            console.log(data);
        }
        fetchData();
    }, [current]);

    return (
        <>
            <section id="dashboard">
                <div className="filters">
                    {
                        filters.map((filter, index) => {
                            return (
                                <div key={index} onClick={()=>{setCurrent(filter)}} className={`filter ${current === filter && "active"}`} >
                                    {
                                        filter
                                    }
                                </div>
                            )
                        })
                    }
                </div>
                <div className="wrapper">
                    <div className="products">

                    </div>
                    <form autoComplete="off" >
                        <TextField label="name" />
                        <TextField label="price" />
                        <TextField label="description" multiline rows={4} />
                        <button>Insert products</button>
                    </form>
                </div>
            </section>
        </>
    )
}