export const ProductReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      return state.filter((todo) => todo.id !== action.payload);
    case "SELECTED":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, select: !todo.select } : todo
      );
    default:
      return state;
  }
};
