import RootReducer from "./Reducers/RootReducer";
import { createStore } from "redux";

const store = createStore(RootReducer);

export default store;