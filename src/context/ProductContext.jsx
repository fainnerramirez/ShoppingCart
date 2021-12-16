import { createContext, useReducer } from "react";
import { uuid } from "uuidv4";
import useForm from "../custom/Hooks/useForm";
import { ProductReducer } from "./ProductReducer";

export const ProductContext = createContext();

const init = () => {
  return JSON.parse(localStorage.getItem("TODOS")) || [];
};

export const ProductProvider = ({ children }) => {
  const [products, dispatch] = useReducer(ProductReducer, [], init);

  const [
    { category, nameProduct, description, price, score },
    handleInputChange,
    reset,
  ] = useForm({
    category: "",
    nameProduct: "",
    description: "",
    price: 0.0,
    score: 0.0,
  });

  const handleAddProduct = (e) => {
    e.preventDefault();

    console.log("add product");
    const newTodo = {
      id: uuid(),
      category: category,
      nameProduct: nameProduct,
      description: description,
      price: price,
      score: (Math.random() * 5).toFixed(1),
      select: false,
    };

    dispatch({ type: "ADD", payload: newTodo });
    reset();
  };

  const handleUpdateProduct = () => {
    const newUpdateTodo = {
      category: category,
      nameProduct: nameProduct,
      description: description,
      price: price,
      score: score,
      select: false,
    };

    dispatch({ type: "UPDATE", payload: newUpdateTodo });
    reset();
  };

  const handleDeleteProduct = (idProduct) => {
    dispatch({ type: "DELETE", payload: idProduct });
  };

  const handleAddToCartProduct = (idProduct) => {
    dispatch({ type: "ADD_TO_CART", payload: idProduct });
  };

  const handleDetailsProducts = (idProduct) => {
    dispatch({ type: "DETAILS", payload: idProduct });
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        handleAddProduct,
        handleUpdateProduct,
        handleDeleteProduct,
        handleAddToCartProduct,
        handleInputChange,
        handleDetailsProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
