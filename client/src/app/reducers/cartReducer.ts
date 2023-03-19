import * as actionTypes from "../constants/cartConstants";
import produce from "immer";

type Action = {
    type: string,
    payload?: any
}

type State = {
    products: any[],
    total: number,
    quantity: number
}

const initialState = {
    products: [],
    total: 0,
    quantity: 0
}

export default function (state: State = initialState, action: Action) {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            return produce(state, (draft) => {
                const exist = draft.products.find(x => x.id === action.payload.id);

                if(exist){
                    exist.quantity++;
                }else{
                    draft.products.push(action.payload);
                }

                draft.quantity++;
                draft.total+= action.payload.price;
            })
        case actionTypes.REMOVE_FROM_CART:
            return produce(state, (draft) => {

            })
        case actionTypes.INCREASE_QUANTITY:
            return produce(state, (draft) => {

            })
        case actionTypes.DECREASE_QUANTITY:
            return produce(state, (draft) => {

            })
        default:
            return state;
    }
}