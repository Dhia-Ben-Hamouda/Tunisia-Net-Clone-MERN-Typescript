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

export function increaseQuantity(){
    
}

export function decreaseQuantity(){

}