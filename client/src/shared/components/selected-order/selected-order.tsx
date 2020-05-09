import React from "react";
import "./selected-order.css";
import { deleteOrder } from "../../../orders-dashboard/actions";
import { useDispatch } from "react-redux";
import { titles } from "../../constants/defines";

interface selectedOrderProps {
  pizzaName: string;
  pizzaPrice: string;
  pizzaId: number;
  pizzaDescription: string;
}

export function SelectedOrder(props: selectedOrderProps) {
  const { pizzaName, pizzaPrice, pizzaId, pizzaDescription } = props;
  const dispatch = useDispatch();

  return (
    <div className="selected-orders-inner">
      <div className="order-name-and-description">
        <span id="order-name">{pizzaName}</span>
      </div>
      <div className="remove-order">
        <i
          onClick={() =>
            dispatch(
              deleteOrder({
                pizzaId,
                pizzaPrice,
                pizzaDescription,
                pizzaName
              })
            )
          }
          className="far fa-trash-alt"
        ></i>
      </div>
      <div className="order-price">
        <span>
          {titles.euros} {pizzaPrice}
        </span>
      </div>
    </div>
  );
}
