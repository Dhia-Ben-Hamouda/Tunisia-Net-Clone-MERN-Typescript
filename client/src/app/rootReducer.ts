import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
import authReducer from "./reducers/authReducer";

const rootReducer = combineReducers({
    cart: cartReducer,
    auth: authReducer
}) 

export default rootReducer;
export type State = ReturnType<typeof rootReducer>