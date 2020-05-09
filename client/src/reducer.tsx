import { ordersDashboardReducer } from "./orders-dashboard/store";
import { combineReducers } from "redux";

export default combineReducers({
  orders: ordersDashboardReducer
});
