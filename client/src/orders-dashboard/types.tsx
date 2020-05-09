export interface Order {
  pizzaId: number;
  pizzaPrice: string;
  pizzaDescription: string;
  pizzaName: string;
}

export interface topLevelState {
  orders: Order[];
  menuPizzas: Order[];
}

export interface pizzaDetails {
  pizzaName: string;
  pizzaDescription: string;
  pizzaPrice: string;
  pizzaId: number;
}

export interface componentLevelState {
  orders: {
    orders: Order[];
    menuPizzas: Order[];
  };
}
