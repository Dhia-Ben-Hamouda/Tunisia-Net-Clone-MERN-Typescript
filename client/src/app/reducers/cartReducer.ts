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
                const product = draft.products.find(x => x.id === action.payload);
                draft.quantity -= product.quantity;
                draft.total -= product.quantity * product.price;
                draft.products = draft.products.filter(x => x.id !== action.payload);
            })
        case actionTypes.INCREASE_QUANTITY:
            return produce(state, (draft) => {
                const product = draft.products.find(x => x.id === action.payload);

                product.quantity++;
                draft.quantity++;
                draft.total+= product.price;
            })
        case actionTypes.DECREASE_QUANTITY:
            return produce(state, (draft) => {
                const product = draft.products.find(x => x.id === action.payload);

                if(product.quantity === 1){
                    return;
                }

                product.quantity--;
                draft.quantity--;
                draft.total-= product.price;
            })
        default:
            return state;
    }
}