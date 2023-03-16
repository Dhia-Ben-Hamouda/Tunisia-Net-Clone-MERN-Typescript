import { url } from "../../api/baseURL";
import * as actionTypes from "../constants/keyboardConstants";

export const fetchKeyboards = (params: any) => async (dispatch: any) => {
    try {
        dispatch({type:actionTypes.FETCH_KEYBOARDS_REQUEST});

        const response = await fetch(`${url}/keyboards/getPaginatedKeyboards?params=${params}`);
        const data = await response.json();

        dispatch({type:actionTypes.FETCH_KEYBOARDS_SUCCESS , payload:data});
    } catch (err) {
        console.error(err)
    }
}