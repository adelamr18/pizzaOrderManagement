import { topLevelState, Order } from "./types";
const initialState: topLevelState = {
  orders: [],
  menuPizzas: []
};
export const ordersDashboardReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
