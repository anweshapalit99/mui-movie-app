import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#273244",
      light: "#394B61",
      contrastText: "#D4D7DD",
      focusColor: "#00E0FF",
    },
    secondary: {
      main: "#1F2A3C",
      contrastText: "#D4D7DD",
    },
    neutral: {
      main: "#00E0FF",
      contrastText: "#1F2A3C",
    },
  },
  typography: {
    fontFamily: "Open Sans",
  },
});
export const drawerWidth = 274.5;
