import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
import authReducer from "./reducers/authReducer";
import computerReducer from "./reducers/computerReducer";
import keyboardReducer from "./reducers/keyboardReducer";
import screenReducer from "./reducers/screenReducer";
import mouseReducer from "./reducers/mouseReducer";

const rootReducer = combineReducers({
    cart: cartReducer,
    auth: authReducer,
    computers:computerReducer,
    keyboards:keyboardReducer,
    screens:screenReducer,
    mouses:mouseReducer
}) 

export default rootReducer;
export type State = ReturnType<typeof rootReducer>