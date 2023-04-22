import { User } from "../../@types/types";
import * as actionTypes from "../constants/authConstants";
import produce from "immer";

type Payload = {
    token:string,
    user:User
}

type Action = {
    type: string,
    payload: Payload
}

type State = {
    token:string | null,
    user:User | null
}

const initalState = {
    token:localStorage.getItem("token"),
    user:JSON.parse(localStorage.getItem("user") as string)
}

export default function (state = initalState, action: Action) {
    switch (action.type) {
        case actionTypes.SIGN_IN:
            return produce(state , (draft)=>{
                draft.token = action.payload.token;
                draft.user = action.payload.user;
                localStorage.setItem("token", action.payload.token);
                localStorage.setItem("profile", JSON.stringify(action.payload.user));
            })
        case actionTypes.SIGN_OUT:
            return produce(state , (draft)=>{
                draft.token = null;
                draft.user = null;
                localStorage.clear();
            })
        default:
            return state;
    }
}