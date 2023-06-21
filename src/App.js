import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import Add from "./components/Add";

const App = () => {
  const [mode, setMode] = useState("dark");

  const darkTheme = createTheme({
    platte: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"Background.default"}>
        <Navbar />
        <Stack direction="row" spacing={4} justifyContent="space-between">
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
};

export default App;
