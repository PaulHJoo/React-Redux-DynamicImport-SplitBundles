import { combineReducers, createStore } from "redux";
import { reducers } from "./index";

export const configureStore = () => {
    const allReducers = combineReducers({ ...reducers });
    const store = createStore(allReducers);

    return store;
}