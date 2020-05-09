import React from "react";
import { titles, formlLabels } from "../shared/constants/defines";
import DeliveryForm from "../shared/components/delivery-form/delivery-form";
import "./delivery-details.css";

export interface deliveryDetailsProps {
  navigateToDashboard: VoidFunction;
}

export default function DeliveryDetails(props: deliveryDetailsProps) {
  const { navigateToDashboard } = props;
  return (
    <div className="delivery-details-container">
      <div className="checkout-form-header">
        <h1 id="header-text">{titles.checkoutHeader}</h1>
      </div>
      <div className="checkout-form-restaurant">
        <span id="restaurant-text">{titles.checkoutRestaurant}</span>
      </div>
      <div className="checkout-form-subheader">
        <span id="subheader-text">{titles.checkoutSubheader}</span>
      </div>
      <hr></hr>
      <div className="deliveryform-container">
        <DeliveryForm
          firstLabel={formlLabels.firstname}
          secondLabel={formlLabels.surname}
          thirdLabel={formlLabels.address}
          fifthLabel={formlLabels.city}
          sixthLabel={formlLabels.state}
          seventhLabel={formlLabels.postalCode}
          navigateToDashboard={navigateToDashboard}
        />
      </div>
    </div>
  );
}
