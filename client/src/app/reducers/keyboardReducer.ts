import * as actionTypes from "../constants/keyboardConstants";
import produce from "immer";

type Action = {
    type:string,
    payload?:any
}

type State = {

}

const initialState = {

}

export default function(state: State = initialState , action: Action){
    switch(action.type){
        case actionTypes.FETCH_KEYBOARDS_REQUEST:
            return produce(state , (draft)=>{

            })
        case actionTypes.FETCH_KEYBOARDS_SUCCESS:
            return produce(state , (draft)=>{

            })
        case actionTypes.FETCH_KEYBOARDS_ERROR:
            return produce(state , (draft)=>{

            })
        default:
            return state;
    }
}