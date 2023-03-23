import * as actionTypes from "../constants/cartConstants";

export function addToCart(product: any){
    return{
        type:actionTypes.ADD_TO_CART,
        payload:product
    }
}

export function removeFromCart(id: string){
    return{
        type:actionTypes.REMOVE_FROM_CART,
        payload:id
    }
}

export function increaseQuantity(id: string){
    return{
        type:actionTypes.INCREASE_QUANTITY,
        payload:id
    }
}

export function decreaseQuantity(id: string){
    return{
        type:actionTypes.DECREASE_QUANTITY,
        payload:id
    }
}