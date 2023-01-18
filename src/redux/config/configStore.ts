import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../../todos";

const rootReducer = combineReducers({
  todos,
});
const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;

export default store;
