import React from "react";
import { Item } from "../@types/types";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../app/actionCreators/cartActionCreators";

export default function ({ pictures, id, name, price, quantity }: Item) {
    const dispatch = useDispatch();
    
    return (
        <>
            <div className="item">
                <div className="left">
                    <img src={pictures[0]} alt="" />
                    <h3>{name.slice(0,35)}...</h3>
                </div>
                <div className="right">
                    <div className="wrapper">
                        <button className="minus" onClick={()=>{dispatch(decreaseQuantity(id))}} >-</button>
                        <div className="quantity">{quantity}</div>
                        <button className="plus" onClick={()=>{dispatch(increaseQuantity(id))}} >+</button>
                    </div>
                    <div onClick={()=>{ dispatch(removeFromCart(id)) }} className="trash">
                        <FaTrash className="icon" />
                    </div>
                    <h3 className="price">{(price * quantity).toFixed(3)} DT</h3>
                </div>
            </div>
        </>
    )
}