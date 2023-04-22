import url from "../../api/baseURL";
import * as actionTypes from "../constants/screenConstants";

export const fetchScreens = (params: any) => async (dispatch: any) => {
    try {
        dispatch({type:actionTypes.FETCH_SCREENS_REQUEST});

        const response = await fetch(`${url}/screens/getPaginatedScreens?params=${JSON.stringify(params)}`);
        const data = await response.json();

        dispatch({type:actionTypes.FETCH_SCREENS_SUCCESS , payload:data});
    } catch (err) {
        console.error(err)
    }
}