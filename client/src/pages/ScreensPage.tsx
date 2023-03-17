import React, { useState , useEffect } from "react";
import Navbar from "../components/Navbar";
import DesktopFilter from "../components/screens/DesktopFilter";
import Product from "../components/computers/Computer";
import Pagination from "../components/Pagination";
import { Screen } from "../@types/types";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../app/rootReducer";
import { fetchScreens } from "../app/actionCreators/screenActionCreators";
import Skeletons from "../components/Skeletons";

export default function () {
    const dispatch: any = useDispatch();
    const { loading , screens , numberOfPages } = useSelector((state: State) => state.screens);
    const [params, setParams] = useState({
        page:1,
        price:[0,4000],
        brand:[],
        size:[],
        resolution:[]
    })

    useEffect(()=>{
        dispatch(fetchScreens(params));
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
                            !loading ? screens.map(({name, _id: id, description, rating, pictures, price }: Screen) => {
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
                            }) : <Skeletons/>
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