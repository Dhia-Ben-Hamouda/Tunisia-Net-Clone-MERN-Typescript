import * as actionTypes from "../constants/authConstants";
import produce from "immer";

type Action = {
    type: string,
    payload?: any
}

export default function (state = [], action: Action) {
    switch (action.type) {
        case actionTypes.SIGN_IN:
            return produce(state , (draft)=>{
                localStorage.setItem("token", action.payload.token);
                localStorage.setItem("profile", JSON.stringify({
                    name: action.payload.name,
                    picture: action.payload.picture,
                    email:action.payload.email,
                    password:action.payload.password,
                    phone: action.payload.name,
                    id: action.payload.name
                }))
            })
        case actionTypes.SIGN_OUT:
            return produce(state , (draft)=>{
                localStorage.clear();
            })
        default:
            return state;
    }
}