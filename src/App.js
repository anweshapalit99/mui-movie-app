import React from "react";
import ResponsiveDrawer from "./Menu/index";
import { theme, drawerWidth } from "./App.style";
import { ThemeProvider } from "@mui/material/styles";

const App = () => {
  const container = Window.document;
  return (
    <>
      <ThemeProvider theme={theme}>
        <ResponsiveDrawer
          container={container}
          drawerWidth={drawerWidth}
        ></ResponsiveDrawer>
      </ThemeProvider>
    </>
  );
};

export default App;
