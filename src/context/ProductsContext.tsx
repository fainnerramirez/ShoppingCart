import { createContext } from "react";
import { initialState, Product } from "../utils/Interfaces";

export type productContext = {
  productState: initialState;
};

export const ProductContextApp = createContext<productContext>(
  {} as productContext
);
