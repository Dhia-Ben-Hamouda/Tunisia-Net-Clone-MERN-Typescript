import * as actionTypes from "../constants/keyboardConstants";
import produce from "immer";
import { Keyboard } from "../../@types/types";

type Action = {
    type:string,
    payload?:any
}

type State = {
    numberOfPages:number,
    keyboards:Keyboard[],
    loading:boolean,
    error:string | null
}

const initialState = {
    numberOfPages:1,
    keyboards:[],
    loading: false,
    error: null,
}

export default function(state: State = initialState , action: Action){
    switch(action.type){
        case actionTypes.FETCH_KEYBOARDS_REQUEST:
            return produce(state , (draft)=>{
                draft.loading = true;
            })
        case actionTypes.FETCH_KEYBOARDS_SUCCESS:
            return produce(state , (draft)=>{

                console.log(action.payload.numberOfPages);

                draft.loading = false;
                draft.keyboards = action.payload.keyboards;
                draft.numberOfPages = action.payload.numberOfPages ? action.payload.numberOfPages : 1;
            })
        case actionTypes.FETCH_KEYBOARDS_ERROR:
            return produce(state , (draft)=>{

            })
        default:
            return state;
    }
}