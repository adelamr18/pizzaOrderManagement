import React, { useEffect } from "react";
import PizzaCard from "../shared/components/card/card";
import Logo from "../shared/components/logo/logo";
import Restaurant from "../shared/components/restaurant/restaurant";
import Subheading from "../shared/components/subheading/subheading";
import { titles } from "../shared/constants/defines";
import "./orders-dashboard.css";
import { pizzaDetails } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "./actions";

export function OrdersDashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);
  const menuPizzas = useSelector((state: any) => state.orders["menuPizzas"]);

  return (
    <div className="main-dashboard">
      <div className="dashboard-main-content-outer">
        <div className="dashboard-main-content-inner">
          <div className="dashboard-logo">
            <Logo />
          </div>
          <div className="dashboard-restaurant">
            <Restaurant restaurantName={titles.restaurantName} />
          </div>
          <div className="dashboard-menu-card">
            <Subheading title={titles.popularDishes} />
            {menuPizzas &&
              menuPizzas.map((pizza: pizzaDetails) => (
                <PizzaCard
                  key={pizza.pizzaId}
                  pizzaPrice={pizza.pizzaPrice}
                  pizzaName={pizza.pizzaName}
                  pizzaDescription={pizza.pizzaDescription}
                  pizzaId={pizza.pizzaId}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
