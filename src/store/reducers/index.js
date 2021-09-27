import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import searchReducer from "./search.reducer";

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  search: searchReducer,
})
export default createRootReducer