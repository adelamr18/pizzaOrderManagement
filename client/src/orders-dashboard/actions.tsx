import { Order } from "./types";
import axios from "axios";

export const addOrder = (order: Order) => ({
  type: "ADD_ORDER",
  payload: {
    order
  }
});

export const deleteOrder = (order: Order) => ({
  type: "DELETE_ORDER",
  payload: {
    order
  }
});

export const getAllPizzas = () => async (dispatch: any) => {
  const res = await axios.get("/api/orders");
  dispatch({
    type: "GET_ALL_PIZZAS",
    payload: res.data
  });
};
