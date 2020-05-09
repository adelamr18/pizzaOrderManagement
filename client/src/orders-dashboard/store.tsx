import { topLevelState, Order } from "./types";
const initialState: topLevelState = {
  orders: [],
  menuPizzas: []
};
export const ordersDashboardReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_ORDER": {
      const { order } = action.payload;
      return {
        ...state,
        orders: state.orders.concat(order)
      };
    }

    case "DELETE_ORDER": {
      const { order } = action.payload;
      return {
        ...state,
        orders: state.orders.filter(
          (item: Order) => item.pizzaId !== order.pizzaId
        )
      };
    }

    case "GET_ALL_PIZZAS": {
      const { pizzaOrders } = action.payload;
      return {
        ...state,
        menuPizzas: pizzaOrders
      };
    }

    default:
      return state;
  }
};
