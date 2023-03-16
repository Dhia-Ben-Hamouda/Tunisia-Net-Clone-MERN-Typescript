import * as actionTypes from "../constants/screenConstants";
import produce from "immer";
import { Screen } from "../../@types/types";

type Action = {
    type:string,
    payload?:any
}

type State = {
    loading:boolean,
    error:null | string,
    screens:Screen[],
    numberOfPages:number
}

const initialState = {
    loading:false,
    screens:[],
    error:null,
    numberOfPages:1
}

export default function(state: State = initialState , action: Action){
    switch(action.type){
        case actionTypes.FETCH_SCREENS_REQUEST:
            return produce(state , (draft)=>{
                draft.loading = true;
            })
        case actionTypes.FETCH_SCREENS_SUCCESS:
            return produce(state , (draft)=>{
                draft.loading = false;
                draft.numberOfPages = action.payload.numberOfPages;
                draft.screens = action.payload.screens;
            })
        case actionTypes.FETCH_SCREENS_ERROR:
            return produce(state , (draft)=>{

            })
        default:
            return state;
    }
}