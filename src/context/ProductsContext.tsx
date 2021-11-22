import { AnyRecord } from "dns";
import { createContext } from "react";
import { initialState, Product } from "../utils/Interfaces";

export type productContext = {
  productState: any;
};

export const ProductContextApp = createContext<unknown>({} as productContext);
