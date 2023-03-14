import * as actionTypes from "../constants/computerConstants";
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
        case actionTypes.FETCH_COMPUTERS_REQUEST:
            return produce(state , (draft)=>{

            })
        case actionTypes.FETCH_COMPUTERS_SUCCESS:
            return produce(state , (draft)=>{

            })
        case actionTypes.FETCH_COMPUTERS_ERROR:
            return produce(state , (draft)=>{

            })
        default:
            return state;
    }
}