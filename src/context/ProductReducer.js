export const ProductReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      return state.filter((product) => product.id !== action.payload);
    case "ADD_TO_CART":
      return state.map((product) =>
        product.id === action.payload
          ? { ...product, select: true, count: product.count + 1 }
          : product
      );
    case "DETAILS":
      return state.map((product) =>
        product.id === action.payload ? product : state
      );
    default:
      return state;
  }
};
