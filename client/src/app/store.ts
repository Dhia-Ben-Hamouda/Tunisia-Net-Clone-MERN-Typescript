import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const store = createStore( rootReducer , composeWithDevTools(applyMiddleware(thunk)) );

export default store; 