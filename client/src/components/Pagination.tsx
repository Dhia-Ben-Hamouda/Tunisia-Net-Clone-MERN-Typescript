import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Pagination = ({ page, setPage, pages }: any) => {

    let paginate;

    if (pages > 2) {
        if (page > 1) {
            paginate = (
                <>
                    <button onClick={() => { setPage(page - 1) }}><FaAngleLeft /></button>
                    {
                        page + 1 > pages && <button onClick={() => { setPage(page - 2) }}>{page - 2}</button>
                    }
                    <button onClick={() => { setPage(page - 1) }}>{page - 1}</button>
                    <button className="active" onClick={() => { setPage(page) }}>{page}</button>
                    {
                        page + 1 <= pages && <>
                            <button onClick={() => { setPage(page + 1) }}>{page + 1}</button>
                            <button onClick={() => { setPage(page + 1) }}><FaAngleRight /></button> </>
                    }
                </>
            )
        }
        else {
            paginate = (
                <>
                    <button className="active" onClick={() => { setPage(page) }}>{page}</button>
                    <button onClick={() => { setPage(page + 1) }}>{page + 1}</button>
                    <button onClick={() => { setPage(page + 2) }}>{page + 2}</button>
                    <button onClick={() => { setPage(page + 1) }}><FaAngleRight /></button>
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
                        <button className="active" onClick={() => { setPage(1) }}>1</button>
                        <button onClick={() => { setPage(2) }}>2</button>
                        <button onClick={() => { setPage(2) }}><FaAngleRight /></button>
                    </>
                )
            }
            else {
                paginate = (
                    <>
                        <button onClick={() => { setPage(1) }}><FaAngleLeft /></button>
                        <button onClick={() => { setPage(1) }}>1</button>
                        <button className="active" onClick={() => { setPage(2) }}>2</button>
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