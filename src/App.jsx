import { ProductProvider } from "./context/ProductContext";
import RouterApp from "./RouterApp";

export const App = () => {
  return (
    <ProductProvider>
      <RouterApp />;
    </ProductProvider>
  );
};
