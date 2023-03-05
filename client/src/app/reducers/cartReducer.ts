import * as actionTypes from "../constants/cartConstants";

type Action = {
    type:string,
    payload?:any
}

type Product = {

}

type State = {
    products:Product[],
    total:number,
    quantity:number
}

const initialState = {
    products:[],
    total:0,
    quantity:0
}

export default function(state: State = initialState , action: Action){
    switch(action.type){
        default:
            return state;
    }
}