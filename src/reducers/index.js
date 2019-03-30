import {combineReducers} from "redux";
import errorReducer from "./errorReducer";
import collectionReducer from "./collectionReducer";
import backlogReducer from "./backlogReducer";

export default combineReducers({
    errors:errorReducer,
    collection:collectionReducer,
    backlog : backlogReducer
})