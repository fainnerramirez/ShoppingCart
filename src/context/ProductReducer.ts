import { Product, initialState } from "../utils/Interfaces";

type ProductAction =
  | { type: "ADD_PRODUCT"; payload: Product }
  | { type: "DELETE_PRODUCT"; payload: { id: string } }
  | { type: "UPDATE_PRODUCT"; payload: Product }
  | { type: "INCREMENT_PRODUCT"; payload: Product }
  | { type: "DECREMENT_PRODUCT"; payload: Product };

export const productReducer = (state: initialState, action: ProductAction) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
};
