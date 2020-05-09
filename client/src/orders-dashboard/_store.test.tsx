import { ordersDashboardReducer as reducer } from "./store";

describe("ordersDashboardReducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      orders: [],
      menuPizzas: []
    });
  });

  it("should add a selected pizza order to the state orders array", () => {
    expect(
      reducer(
        {
          orders: [],
          menuPizzas: []
        },
        {
          type: "ADD_ORDER",
          payload: {
            order: {
              pizzaId: 1,
              pizzaPrice: "9.4",
              pizzaDescription: "This is a pizza",
              pizzaName: "Pizza Tuna"
            }
          }
        }
      )
    ).toEqual({
      orders: [
        {
          pizzaId: 1,
          pizzaPrice: "9.4",
          pizzaDescription: "This is a pizza",
          pizzaName: "Pizza Tuna"
        }
      ],
      menuPizzas: []
    });
  });

  it("should delete a selected pizza having the same id of a pizza that exists in the state orders array", () => {
    expect(
      reducer(
        {
          orders: [
            {
              pizzaId: 1,
              pizzaPrice: "9.4",
              pizzaDescription: "This is a pizza",
              pizzaName: "Pizza Tuna"
            }
          ],
          menuPizzas: []
        },
        {
          type: "DELETE_ORDER",
          payload: {
            order: {
              pizzaId: 1,
              pizzaPrice: "9.4",
              pizzaDescription: "This is a pizza",
              pizzaName: "Pizza Tuna"
            }
          }
        }
      )
    ).toEqual({
      orders: [],
      menuPizzas: []
    });
  });

  it("should get all available menu pizzas and store them in the states menuPizzas array ", () => {
    expect(
      reducer(
        {
          orders: [],
          menuPizzas: []
        },
        {
          type: "GET_ALL_PIZZAS",
          payload: {
            pizzaOrders: [
              {
                pizzaId: 1,
                pizzaPrice: "9.4",
                pizzaDescription: "This is a pizza",
                pizzaName: "Pizza Tuna"
              },
              {
                pizzaId: 2,
                pizzaPrice: "10",
                pizzaDescription: "This is a Margherita pizza",
                pizzaName: "Pizza Margherita"
              }
            ]
          }
        }
      )
    ).toEqual({
      orders: [],
      menuPizzas: [
        {
          pizzaId: 1,
          pizzaPrice: "9.4",
          pizzaDescription: "This is a pizza",
          pizzaName: "Pizza Tuna"
        },
        {
          pizzaId: 2,
          pizzaPrice: "10",
          pizzaDescription: "This is a Margherita pizza",
          pizzaName: "Pizza Margherita"
        }
      ]
    });
  });
});
