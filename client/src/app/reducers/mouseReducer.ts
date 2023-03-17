import * as actionTypes from "../constants/mouseConstants";
import produce from "immer";
import { Mouse } from "../../@types/types";

type Action = {
    type:string,
    payload?:any
}

type State = {
    numberOfPages:number,
    loading:boolean,
    error:null | string,
    mouses:Mouse[]
}

const initialState = {
    numberOfPages:1,
    loading:false,
    mouses:[],
    error:null
}

export default function(state: State = initialState , action: Action){
    switch(action.type){
        case actionTypes.FETCH_MOUSES_REQUEST:
            return produce(state , (draft)=>{
                draft.loading = true;
            })
        case actionTypes.FETCH_MOUSES_SUCCESS:
            return produce(state , (draft)=>{
                draft.loading = false;
                draft.numberOfPages = action.payload.numberOfPages ? action.payload.numberOfPages : 1;
                draft.mouses = action.payload.mouses;
            })
        case actionTypes.FETCH_MOUSES_ERROR:
            return produce(state , (draft)=>{

            })
        default:
            return state;
    }
}