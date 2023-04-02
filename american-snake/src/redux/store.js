import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as ProductReducer } from "./product/reducer";
import { reducer as AdminReducer } from "./admin/reducer";
import { reducer as AuthReducer } from "./auth/reducer";
import { reducer as BagReducer } from "./bagReducer/reducer";
const rootReducer = combineReducers({
  //reducer for combining
  ProductReducer,
  AdminReducer,
  AuthReducer,
  BagReducer,
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
