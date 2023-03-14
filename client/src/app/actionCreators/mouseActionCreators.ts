import { url } from "../../api/baseURL";
import * as actionTypes from "../constants/mouseConstants";

export const fetchComputers = (params: any) => async (dispatch: any) => {
    try {
        dispatch({type:actionTypes.FETCH_MOUSES_REQUEST});

        const response = await fetch(`${url}/mouses/getPaginatedMouses?params=${params}`);
        const data = await response.json();

        console.log(data);
    } catch (err) {
        console.error(err)
    }
}