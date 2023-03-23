import React from "react";
import CartItem from "../components/CartItem";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../app/rootReducer";
import { Item } from "../@types/types";

export default function () {
    const dispatch = useDispatch();
    const { products, total, quantity } = useSelector((state: State) => state.cart);

    return (
        <>
            <Navbar />
            <section id="cart">
                <div className="cart-items">
                    {
                        products.map((item: Item)=>{
                            return(
                                <CartItem
                                    key={item.id}
                                    id={item.id}
                                    name={item.name}
                                    quantity={item.quantity}
                                    price={item.price}
                                    pictures={item.pictures}
                                />
                            )
                        })
                    }
                </div>
                <div className="checkout">
                    <h3>Total: <span>{total.toFixed(3)} DT</span></h3>
                    <button>Proceed to Checkout</button>
                </div>
            </section>
        </>
    )
}