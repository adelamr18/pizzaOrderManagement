import * as actions from "./actions";
describe("actions", () => {
  it("should dispatch an action that contains the selected order of the user", () => {
    const order = {
      pizzaId: 1,
      pizzaPrice: "9.4",
      pizzaDescription: "This is a pizza",
      pizzaName: "Pizza Tuna"
    };
    const addOrderAction = {
      type: "ADD_ORDER",
      payload: {
        order
      }
    };
    expect(actions.addOrder(order)).toEqual(addOrderAction);
  });

  it("should dispatch an action to delete the previously selected order of the user", () => {
    const order = {
      pizzaId: 1,
      pizzaPrice: "9.4",
      pizzaDescription: "This is a pizza",
      pizzaName: "Pizza Tuna"
    };
    const deleteOrderAction = {
      type: "DELETE_ORDER",
      payload: {
        order
      }
    };
    expect(actions.deleteOrder(order)).toEqual(deleteOrderAction);
  });
});
