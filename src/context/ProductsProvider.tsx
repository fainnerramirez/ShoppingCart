import React, { useReducer } from "react";
import { products } from "../data/DataProducts";
import { initialState, Product } from "../utils/Interfaces";
import { productContext, ProductContextApp } from "./ProductsContext";
import { productReducer } from "./ProductReducer";

const INITIAL_STATE: any = {
  productCount: 0,
  products: products,
  total: 0.0,
  select: false,
};

interface props {
  children: JSX.Element | JSX.Element[];
}

export const ProductProvider: React.FC<props> = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, INITIAL_STATE);

  const increment = (payload: any) => {
    dispatch({ type: "ADD_PRODUCT", payload });
  };

  return (
    <ProductContextApp.Provider value={{ state, increment }}>
      {children}
    </ProductContextApp.Provider>
  );
};
