import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import MainReducer from "./MainReducer";

export let reducers = combineReducers({
    main: MainReducer
});

let store = createStore(reducers,
    applyMiddleware(thunk));

window.store = store;

export default store;
