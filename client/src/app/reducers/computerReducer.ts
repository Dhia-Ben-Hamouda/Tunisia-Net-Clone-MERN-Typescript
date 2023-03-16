import * as actionTypes from "../constants/computerConstants";
import produce from "immer";
import { Computer } from "../../@types/types";

type Action = {
    type: string,
    payload?: any
}

type State = {
    numberOfPages: number,
    computers: Computer[],
    loading: boolean,
    error: string | null
}

const initialState = {
    numberOfPages: 1,
    computers: [],
    loading: false,
    error: null,
}

export default function (state: State = initialState, action: Action) {
    switch (action.type) {
        case actionTypes.FETCH_COMPUTERS_REQUEST:
            return produce(state, (draft) => {
                draft.loading = true;
            })
        case actionTypes.FETCH_COMPUTERS_SUCCESS:
            return produce(state, (draft) => {
                draft.loading = false;
                draft.computers = action.payload.computers;
                draft.numberOfPages = action.payload.numberOfPages;
            })
        case actionTypes.FETCH_COMPUTERS_ERROR:
            return produce(state, (draft) => {

            })
        default:
            return state;
    }
}