import React, { useState } from "react";
import "./App.css";
import { OrdersDashboard } from "./orders-dashboard/orders-dashboard";
import Header from "./shared/components/header/header";
import { titles } from "./shared/constants/defines";
import ShoppingCart from "./shared/components/shopping-cart/shopping-cart";
import DeliveryDetails from "./delivery-details/delivery-details";

function App() {
  const [isOrderConfirmed, verifyOrderConfirmed] = useState(false);
  const navigateToDeliveryDetails = () => {
    verifyOrderConfirmed(true);
  };
  const navigateToDashboard = () => {
    verifyOrderConfirmed(false);
  };

  return (
    <div className="App">
      <div className="header">
        <Header
          navigateToDashboard={navigateToDashboard}
          title={titles.restaurantName}
        />
      </div>
      <div className="main-content">
        <div className="dashboard-main-container">
          {isOrderConfirmed ? (
            <DeliveryDetails navigateToDashboard={navigateToDashboard} />
          ) : (
            <OrdersDashboard />
          )}
        </div>
        <div className="shopping-cart-main-container">
          <ShoppingCart
            isOrderConfirmed={isOrderConfirmed}
            navigateToDeliveryDetails={navigateToDeliveryDetails}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
