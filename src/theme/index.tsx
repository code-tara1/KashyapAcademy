import { extendTheme } from "@chakra-ui/react";

// Supports weights 100-900
import "@fontsource-variable/montserrat";
import { ButtonStyle as Button } from "./ButtonStyle";
import { CardStyle as Card } from "./CardStyle";

export const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        fontFamily: "Montserrat  Variable",
      },
    },
  },
  colors: {
    primary: {
      100: "#FFA347",
      200: "#FF7A00",
      300: "#FF6600",
      400: "#FF5200",
      500: "#FF4900",
      600: "#E63A00",
      700: "#CC2A00",
      800: "#B31B00",
      900: "#990B00",
    },
    secondary: {
      100: "#B3E36A",
      200: "#8ED138",
      300: "#6DC100",
      400: "#5AAB00",
      500: "#62C300",
      600: "#53A000",
      700: "#438800",
      800: "#326F00",
      900: "#225600",
    },
  },
  components: {
    Button,
    Card,
  },
});
