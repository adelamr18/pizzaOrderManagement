import React from "react";
import { titles, notifications } from "../../constants/defines";
import "./shopping-cart.css";
import { useSelector } from "react-redux";
import {
  componentLevelState,
  pizzaDetails
} from "../../../orders-dashboard/types";
import { SelectedOrder } from "../selected-order/selected-order";

export interface ShoppingCartProps {
  navigateToDeliveryDetails: VoidFunction;
  isOrderConfirmed: boolean;
}

export default function ShoppingCart(props: ShoppingCartProps) {
  const { navigateToDeliveryDetails, isOrderConfirmed } = props;
  const selectedOrders = useSelector(
    (state: componentLevelState) => state.orders["orders"]
  );
  const totalPrice = selectedOrders.reduce((prev: any, cur: any) => {
    return prev + parseInt(cur.pizzaPrice);
  }, 0);
  const isButtonDisabled = () => {
    return selectedOrders.length > 0
      ? "shopping-cart-order-confirmation-active"
      : "shopping-cart-order-confirmation-disabled";
  };
  const calculateTotalPrice = () => {
    return totalPrice ? Math.floor(totalPrice + 1) : 0;
  };

  return (
    <div className="shopping-cart-inner">
      <div className="shopping-cart-heading">
        <span id="shopping-cart-heading-text">{titles.shoppingBasket}</span>
      </div>
      <div className="shopping-cart-subheading-outer">
        <div className="shopping-cart-subheading-inner">
          <div className="shoppping-cart-logo">
            <i className="fa fa-shopping-cart"></i>
          </div>
          <div className="shopping-cart-text-outer">
            <span id="shopping-text">{titles.shoppingCartText}</span>
          </div>
        </div>
        <div className="selected-orders-container">
          {selectedOrders.length > 0 && <hr></hr>}
          {selectedOrders.length > 0 && (
            <div className="selected-orders-outer">
              {selectedOrders.map((order: pizzaDetails) => (
                <SelectedOrder
                  key={order.pizzaId}
                  pizzaPrice={order.pizzaPrice}
                  pizzaName={order.pizzaName}
                  pizzaId={order.pizzaId}
                  pizzaDescription={order.pizzaDescription}
                />
              ))}
            </div>
          )}
          {selectedOrders.length > 0 && <hr></hr>}
        </div>
        <div className="shopping-cart-subtotal-and-total-price">
          <div className="shopping-cart-subtotal-outer">
            <span id="subtotal-heading">{titles.subtotal}</span>
            <span id="subtotal-actual-price">
              {titles.euros} {totalPrice}
            </span>
          </div>
          <div className="shopping-cart-delivery-outer">
            <span id="delivery-heading">{titles.delivery}</span>
            <span id="delivery-price">
              {titles.euros} {totalPrice ? 1 : 0}
            </span>
          </div>
          <div className="shopping-cart-total-outer">
            <span id="total-price-heading">Total</span>
            <div className="subtotal-actual-price">
              <span id="euro-total-price">
                {titles.euros} {calculateTotalPrice()}
              </span>
              <span id="us-dollars-price">
                {titles.dollars} {Math.floor(totalPrice * 1.1)}
              </span>
            </div>
          </div>
        </div>
        {!isOrderConfirmed && (
          <div
            onClick={() => {
              selectedOrders.length > 0 && navigateToDeliveryDetails();
            }}
            className={isButtonDisabled()}
          >
            <span id="order-text">{titles.order}</span>
          </div>
        )}
        {selectedOrders.length === 0 && isOrderConfirmed && (
          <div className="empty-shopping-cart-warning">
            <span id="empty-cart-warning-text">
              {notifications.errors.emptyCart}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
