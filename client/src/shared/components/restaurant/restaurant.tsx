import React from "react";
import "./restaurant.css";

export interface RestuarantProps {
  restaurantName: string;
}
export default function Restaurant(props: RestuarantProps) {
  const { restaurantName } = props;

  return (
    <div className="restaurant-and-rating">
      <div className="restaurant-name">
        <h2>{restaurantName}</h2>
      </div>
    </div>
  );
}
