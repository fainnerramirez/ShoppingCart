import React, { useReducer } from "react";
import { products } from "../data/DataProducts";
import { initialState, Product } from "../utils/Interfaces";
import { productContext, ProductContextApp } from "./ProductsContext";
import { productReducer } from "./ProductReducer";

const INITIAL_STATE: initialState = {
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

  return (
    <ProductContextApp.Provider value={state}>
      {children}
    </ProductContextApp.Provider>
  );
};
