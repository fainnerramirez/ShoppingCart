import { extendTheme, withDefaultVariant  } from "@chakra-ui/react";
import "@fontsource/montserrat"
import "@fontsource/open-sans"
import "@fontsource/inter"

export const theme = extendTheme(

  //withDefaultVariant({ variant: "outline", components: ["Button"] }),

  {
    components: {
      Button: {
        // 1. We can update the base styles
        baseStyle: {
          fontWeight: "bold", // Normally, it is "semibold"
          color: "gray.50",
        },
        // 2. We can add a new button size or extend existing
        sizes: {
          xl: {
            h: "56px",
            fontSize: "lg",
            px: "32px",
          },
        },
        // 3. We can add a new visual variant
        variants: {
          "btn-primary": {
            bg: "#FF0080",            
          },
        },
      },
    },
    
    styles: {
      global: {
        body: {
          bg: "gray.50",
          color: "gray.900"
        }
      },
      colors: {
        primary: "#FF0080"
      },
    },

    fonts: {
      heading: 'Montserrat',
      body: 'Inter', 
    }
  }
);