import * as actionTypes from "../constants/cartConstants";

export async function addToCart(product: any){
    return{
        type:actionTypes.ADD_TO_CART,
        payload:product
    }
}

export async function removeFromCart(id: string){
    return{
        type:actionTypes.REMOVE_FROM_CART,
        payload:id
    }
}

export async function increaseQuantity(){
    
}

export async function decreaseQuantity(){

}