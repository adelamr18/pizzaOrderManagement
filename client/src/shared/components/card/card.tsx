import React from "react";
import { Card } from "react-bootstrap";
import "./card.css";
import pizzaMargherita from "../../../images/pizzaMargherita.png";
import { useDispatch, useSelector } from "react-redux";
import { addOrder } from "../../../orders-dashboard/actions";
import { Order } from "../../../orders-dashboard/types";

export interface pizzaCardProps {
  pizzaName: string;
  pizzaDescription: string;
  pizzaPrice: string;
  pizzaId: number;
}

export default function PizzaCard(props: pizzaCardProps) {
  let { pizzaName, pizzaDescription, pizzaPrice, pizzaId } = props;
  const dispatch = useDispatch();
  const selectedOrders = useSelector((state: any) => state.orders["orders"]);
  const handleOrderSelection = (selectedOrder: Order) => {
    let wasOrderAdded = checkPreviousOrders(selectedOrder);
    let latestAddedOrder = [...selectedOrders].pop();
    wasOrderAdded
      ? addSelectedOrder(
          latestAddedOrder.pizzaId + 1,
          pizzaPrice,
          pizzaDescription,
          pizzaName
        )
      : addSelectedOrder(pizzaId, pizzaPrice, pizzaDescription, pizzaName);
  };
  const checkPreviousOrders = (selectedOrder: Order) => {
    return selectedOrders.some(
      (order: Order) => order.pizzaId === selectedOrder.pizzaId
    );
  };
  const addSelectedOrder = (
    id: number,
    pizzaPrice: string,
    pizzaDescription: string,
    pizzaName: string
  ) => {
    dispatch(
      addOrder({
        pizzaId: id,
        pizzaPrice,
        pizzaDescription,
        pizzaName
      })
    );
  };

  return (
    <Card>
      <Card.Body>
        <div className="pizza-details-container">
          <div className="pizza-description">
            <span>{pizzaName}</span>
            <span>{pizzaDescription} </span>
          </div>
          <div className="pizza-image-and-add-container">
            <div className="pizza-image">
              <Card.Img variant="top" src={pizzaMargherita} />
            </div>
            <div className="plus-icon">
              <i
                onClick={() =>
                  handleOrderSelection({
                    pizzaId,
                    pizzaPrice,
                    pizzaDescription,
                    pizzaName
                  })
                }
                className="fas fa-plus"
              ></i>
            </div>
          </div>
        </div>
        <div className="price-container">
          <span id="pizza-price">€ {pizzaPrice}</span>
        </div>
      </Card.Body>
    </Card>
  );
}
