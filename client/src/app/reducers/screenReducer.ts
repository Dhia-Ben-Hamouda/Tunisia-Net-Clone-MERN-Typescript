import * as actionTypes from "../constants/screenConstants";
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
        case actionTypes.FETCH_SCREENS_REQUEST:
            return produce(state , (draft)=>{

            })
        case actionTypes.FETCH_SCREENS_SUCCESS:
            return produce(state , (draft)=>{

            })
        case actionTypes.FETCH_SCREENS_ERROR:
            return produce(state , (draft)=>{

            })
        default:
            return state;
    }
}