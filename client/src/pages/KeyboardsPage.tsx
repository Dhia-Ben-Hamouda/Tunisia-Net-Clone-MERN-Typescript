import React, { useState , useEffect } from "react";
import Navbar from "../components/Navbar";
import DesktopFilter from "../components/keyboards/DesktopFilter";
import Product from "../components/keyboards/Keyboard";
import Pagination from "../components/Pagination";
import { Keyboard } from "../@types/types";
import { fetchKeyboards } from "../app/actionCreators/keyboardActionCreators";
import { useDispatch , useSelector } from "react-redux";
import { State } from "../app/rootReducer";
import Skeletons from "../components/Skeletons";

export default function () {
    const dispatch: any = useDispatch();
    const { loading , keyboards , numberOfPages } = useSelector((state: State) => state.keyboards);
    const [params, setParams] = useState({
        page: 1,
        price: [0, 500],
        brand: [],
        wireless: [],
        mechanical: []
    })

    useEffect(() => {
        dispatch(fetchKeyboards(params));
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
                            !loading ? keyboards.map(({ name, _id: id, description, rating, pictures, price }: Keyboard) => {
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