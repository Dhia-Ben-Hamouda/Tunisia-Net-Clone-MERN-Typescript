import * as actionTypes from "../constants/authConstants";

export function login(data: any) {
    return{
        type:actionTypes.SIGN_IN,
        payload:data
    }
}

export function signOut() {
    return {
        type: actionTypes.SIGN_OUT
    }
}