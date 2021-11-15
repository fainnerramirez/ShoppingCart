import { mode } from "@chakra-ui/theme-tools";
import { extendTheme, useColorModeValue } from "@chakra-ui/react";
import "@fontsource/montserrat";
import "@fontsource/open-sans";
import "@fontsource/inter";
import "@fontsource/nunito";

/*export const theme = extendTheme(
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
        variants: {},
      },

      Headding: {
        // 1. We can update the base styles
        baseStyle: {
          fontWeight: "bolder", // Normally, it is "semibold"
        },
      },
    },

    styles: {
      global: {
        bg: mode("gray.100", "yellow.900"),
      },
    },

    fonts: {
      heading: "Nunito",
      body: "Nunito",
    },
  },
  styles
);
*/

export const theme = extendTheme({
  styles: {
    global: (props: any) => ({
      body: {
        fontFamily: "body",
        color: mode("gray.800", "whiteAlpha.900")(props),
        bg: mode("white", "#0a1229")(props),
        lineHeight: "base",
      },
    }),
  },
});
