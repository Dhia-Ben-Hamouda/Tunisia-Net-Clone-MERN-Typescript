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
                {
                    total ? <>
                        <div className="cart-items">
                            {
                                products.map((item: Item) => {
                                    return (
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
                            <h1>Summary</h1>
                            <div className="sub-total">
                                <h3>Subtotal</h3>
                                <span>{total.toFixed(3)} DT</span>
                            </div>
                            <div className="shipping">
                                <h3>Shipping: </h3>
                                <span>7.000 DT</span>
                            </div>
                            <div className="line"></div>
                            <div className="total">
                                <h3>Total: </h3>
                                <span>{(total+7).toFixed(3)} DT</span>
                            </div>
                            <button>Proceed to Checkout</button>
                        </div>
                    </> : <div className="empty-cart">
                        <h1>Your cart is currently empty...</h1>
                    </div>
                }
            </section>
        </>
    )
}