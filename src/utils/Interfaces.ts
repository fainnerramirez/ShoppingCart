import Products from "../components/Products.component";

export interface Product {
  id: number;
  category: string;
  name: string;
  description: string;
  price: number;
  select: boolean;
  score: number;
}

export interface initialState {
  productCount: number;
  products: Product[];
  total: number;
  select: boolean;
}
