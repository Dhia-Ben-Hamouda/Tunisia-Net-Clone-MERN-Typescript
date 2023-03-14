import { url } from "../../api/baseURL";
import * as actionTypes from "../constants/screenConstants";

export const fetchComputers = (params: any) => async (dispatch: any) => {
    try {
        dispatch({type:actionTypes.FETCH_SCREENS_REQUEST});

        const response = await fetch(`${url}/computers/getPaginatedComputers?params=${params}`);
        const data = await response.json();

        console.log(data);
    } catch (err) {
        console.error(err)
    }
}