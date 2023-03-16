import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Pagination = ({ page, setParams, pages }: any) => {

    let paginate;

    if (pages > 2) {
        if (page > 1) {
            paginate = (
                <>
                    <button onClick={() => { setParams(page - 1) }}><FaAngleLeft /></button>
                    {
                        page + 1 > pages && <button onClick={() => { setParams(page - 2) }}>{page - 2}</button>
                    }
                    <button onClick={() => { setParams(page - 1) }}>{page - 1}</button>
                    <button className="active" onClick={() => { setParams(page) }}>{page}</button>
                    {
                        page + 1 <= pages && <>
                            <button onClick={() => { setParams(page + 1) }}>{page + 1}</button>
                            <button onClick={() => { setParams(page + 1) }}><FaAngleRight /></button> </>
                    }
                </>
            )
        }
        else {
            paginate = (
                <>
                    <button className="active" onClick={() => { setParams(page) }}>{page}</button>
                    <button onClick={() => { setParams(page + 1) }}>{page + 1}</button>
                    <button onClick={() => { setParams(page + 2) }}>{page + 2}</button>
                    <button onClick={() => { setParams(page + 1) }}><FaAngleRight /></button>
                </>
            )
        }
    }
    else {
        if (pages === 1) {
            paginate = (
                <>

                </>
            )
        }
        else {
            if (page === 1) {
                paginate = (
                    <>
                        <button className="active" onClick={() => { setParams(1) }}>1</button>
                        <button onClick={() => { setParams(2) }}>2</button>
                        <button onClick={() => { setParams(2) }}><FaAngleRight /></button>
                    </>
                )
            }
            else {
                paginate = (
                    <>
                        <button onClick={() => { setParams(1) }}><FaAngleLeft /></button>
                        <button onClick={() => { setParams(1) }}>1</button>
                        <button className="active" onClick={() => { setParams(2) }}>2</button>
                    </>
                )
            }
        }
    }


    return (
        <>
            {
                paginate
            }
        </>
    )
}

export default Pagination;