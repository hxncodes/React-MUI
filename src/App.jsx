import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Rightbar from "../components/Rightbar";
import { Stack } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import CreatePost from "../components/CreatePost";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
        <CreatePost />
      </ThemeProvider>
    </>
  );
}

export default App;
