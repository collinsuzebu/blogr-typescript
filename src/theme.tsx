import { createTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#F7F7F8",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },

  overrides: {
    MuiButton: {
      root: {
        borderRadius: 20,
      },
    },
  },
});

export default theme;
