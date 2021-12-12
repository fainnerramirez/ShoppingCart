import React from "react";
import ReactDOM from "react-dom";
import App from "./RouterApp";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { theme } from "./utils/Theme";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeScript initialColorMode="light" />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
