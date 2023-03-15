import { url } from "../../api/baseURL";
import verifyParams from "../../helpers/verifyParams";
import * as actionTypes from "../constants/computerConstants";

export const fetchComputers = (params: any) => async (dispatch: any) => {
    try {     
        dispatch({type:actionTypes.FETCH_COMPUTERS_REQUEST});

        const verifiedParams = verifyParams(params,"computers"); 

        console.log(verifiedParams);

        const response = await fetch(`${url}/computers/getPaginatedComputers?params=${JSON.stringify(verifiedParams)}`);
        const data = await response.json();

        console.log(data);

        dispatch({type:actionTypes.FETCH_COMPUTERS_SUCCESS , payload:data});
    } catch (err) {
        console.error(err)
    }
}