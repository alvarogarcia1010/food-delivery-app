import { combineReducers, createStore } from "redux";
import orderReducer from "./Order/reducer";

const rootReducer = combineReducers({
  order: orderReducer
})

const store = createStore(rootReducer)
export default store