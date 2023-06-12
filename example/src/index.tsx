import React, { CSSProperties } from "react";
import ReactDOM from "react-dom/client";
import { Element, Button } from "mui-scroll-button";
import { AppBar, Box } from "@mui/material";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const baseStyle: CSSProperties = {
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

root.render(
  <React.StrictMode>
    <AppBar position="fixed">
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        <Button
          sx={{ my: 2, color: "white", display: "block" }}
          activeStyle={{ border: "1px solid black" }}
          to="blue"
          spy={true}
          smooth={true}
          offset={-68}
        >
          Blue
        </Button>
        <Button
          sx={{ my: 2, color: "white", display: "block" }}
          activeStyle={{ border: "1px solid black" }}
          to="green"
          spy={true}
          smooth={true}
          offset={-68}
        >
          Green
        </Button>
        <Button
          sx={{ my: 2, color: "white", display: "block" }}
          activeStyle={{ border: "1px solid black" }}
          to="red"
          spy={true}
          smooth={true}
          another={true}
          offset={-68}
        >
          Red
        </Button>
      </Box>
    </AppBar>
    <Element
      name="blue"
      style={{
        ...baseStyle,
        backgroundColor: "blue",
      }}
    >
      Blue
    </Element>
    <Element
      name="green"
      style={{
        ...baseStyle,
        backgroundColor: "green",
      }}
    >
      Green
    </Element>
    <Element
      name="red"
      style={{
        ...baseStyle,
        backgroundColor: "red",
      }}
    >
      Red
    </Element>
  </React.StrictMode>
);
