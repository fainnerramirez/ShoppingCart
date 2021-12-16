import React from "react";
import ReactDOM from "react-dom";
import App from "./RouterApp";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { theme } from "./utils/Theme";
import { ProductProvider } from "./context/ProductContext";

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <ChakraProvider resetCSS theme={theme}>
        <ColorModeScript initialColorMode="light" />
        <App />
      </ChakraProvider>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
