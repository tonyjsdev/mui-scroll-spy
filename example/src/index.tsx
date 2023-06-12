import React from "react";
import ReactDOM from "react-dom/client";
import { Element, Button } from "mui-scroll-button";
import { AppBar, Box } from "@mui/material";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppBar position="fixed">
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        <Button
          sx={{ my: 2, color: "white", display: "block" }}
          activeStyle={{ border: "1px solid black" }}
          to="first"
          spy={true}
          offset={-68}
        >
          menu 1{/* <Typography variant="h6">menu 1</Typography> */}
        </Button>
        <Button
          sx={{ my: 2, color: "white", display: "block" }}
          activeStyle={{ border: "1px solid black" }}
          to="second"
          spy={true}
          offset={-68}
        >
          menu 2
        </Button>
        <Button
          sx={{ my: 2, color: "white", display: "block" }}
          activeStyle={{ border: "1px solid black" }}
          to="third"
          spy={true}
          offset={-68}
        >
          menu 3
        </Button>
      </Box>
    </AppBar>
    <Element name="first" style={{ height: "1300px" }}>
      First
    </Element>
    <Element name="second" style={{ height: "1300px" }}>
      Second
    </Element>
    <Element name="third" style={{ height: "1300px" }}>
      Third
    </Element>
  </React.StrictMode>
);
