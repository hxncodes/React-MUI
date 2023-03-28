import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Rightbar from "../components/Rightbar";
import { Box, CssBaseline, Stack, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import CreatePost from "../components/CreatePost";

function App() {
  // Mode switching
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
        <Box bgcolor={"palette.background.default"}>
          <Navbar />
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Sidebar setMode={setMode} mode={mode} />
            <Feed />
            <Rightbar />
          </Stack>
          <CreatePost />
        </Box>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
