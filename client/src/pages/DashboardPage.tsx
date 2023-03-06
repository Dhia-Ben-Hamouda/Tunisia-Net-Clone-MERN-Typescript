import React, { useEffect, useState } from "react";
import { url } from "../api/baseURL";
import { TextField, MenuItem } from "@mui/material";

const filters = ["computers", "keyboards", "mouses", "screens"];

export default function () {
    const [current, setCurrent] = useState("computers");
    const [products, setProducts] = useState([]);

    const [brand, setBrand] = useState("");
    const [procesor, setProcesor] = useState("");
    const [memory, setMemory] = useState("");
    const [storage, setStorage] = useState("");
    const [graphicsCard, setGraphicsCard] = useState("");

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`${url}/${current}/getAll${current[0].toUpperCase() + current.slice(1)}`);
            const data = await response.json();

            setProducts(data);
        }
        fetchData();
    }, [current]);

    function fileHandler(e: any){
        const files = e.target.files;
        for(let key in files){
            if(files.hasOwnProperty(key)){
                console.log(files[key]);
            }
        }
    }

    return (
        <>
            <section id="dashboard">
                <div className="filters">
                    {
                        filters.map((filter, index) => {
                            return (
                                <div key={index} onClick={() => { setCurrent(filter) }} className={`filter ${current === filter && "active"}`} >
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
                        <TextField label="description"  />
                        <div>
                            <TextField label="price" />
                            <TextField select label="brand" value={brand} onChange={e => setBrand(e.target.value)} >
                                <MenuItem value="HP" >HP</MenuItem>
                                <MenuItem value="Asus" >Asus</MenuItem>
                                <MenuItem value="Dell" >Dell</MenuItem>
                            </TextField>
                        </div>
                        <div>
                            <TextField select label="procesor" value={procesor} onChange={e => setProcesor(e.target.value)} >
                                <MenuItem value="AMD Ryzen 5" >AMD Ryzen 5</MenuItem>
                                <MenuItem value="AMD Ryzen 7" >AMD Ryzen 7</MenuItem>
                                <MenuItem value="Intel Core i5" >Intel Core i5</MenuItem>
                                <MenuItem value="Intel Core i7" >Intel Core i7</MenuItem>
                            </TextField>

                            <TextField select label="memory" value={memory} onChange={e => setMemory(e.target.value)} >
                                <MenuItem value="8 gb" >8 gb</MenuItem>
                                <MenuItem value="16 gb" >16 gb</MenuItem>
                                <MenuItem value="24 gb" >24 gb</MenuItem>
                                <MenuItem value="32 gb" >32 gb</MenuItem>
                            </TextField>
                        </div>

                        <div>
                            <TextField select label="storage" value={storage} onChange={e => setStorage(e.target.value)} >
                                <MenuItem value="1TB + 256GB SSD" >1TB + 256GB SSD</MenuItem>
                                <MenuItem value="1TB SSD" >1TB SSD</MenuItem>
                                <MenuItem value="512GB SSD" >512GB SSD</MenuItem>
                            </TextField>

                            <TextField select label="graphicsCard" value={graphicsCard} onChange={e => setGraphicsCard(e.target.value)} >
                                <MenuItem value="GTX 1650" >GTX 1650</MenuItem>
                                <MenuItem value="RTX 3050" >RTX 3050</MenuItem>
                                <MenuItem value="RTX 3050 ti" >RTX 3050 ti</MenuItem>
                            </TextField>
                        </div>
                        <input type="file" multiple onChange={fileHandler} />
                        <button>Insert products</button>
                    </form>
                </div>
            </section>
        </>
    )
}