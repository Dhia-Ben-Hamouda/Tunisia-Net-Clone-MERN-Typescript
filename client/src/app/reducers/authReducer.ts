import * as actionTypes from "../constants/authConstants";
import produce from "immer";

type Action = {
    type: string,
    payload?: any
}

type State = {
    token:null | string
}

const initialState = {
    token: null,
}

export default function (state: State = initialState, action: Action) {
    switch (action.type) {
        case actionTypes.SIGN_IN:
            return produce(state , (draft)=>{
                localStorage.setItem("profile", JSON.stringify({
                    name: action.payload.name,
                    picture: action.payload.picture,
                    email:action.payload.email,
                    password:action.payload.password,
                    phone: action.payload.name,
                    id: action.payload.name
                }))
                draft.token = action.payload.token;
            })
        case actionTypes.SIGN_OUT:
            return produce(state , (draft)=>{
                localStorage.clear();
                draft.token = null;
            })
        default:
            return state;
    }
}