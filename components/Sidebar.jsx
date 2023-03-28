import {
  AccountBox,
  Home,
  ModeNight,
  Pages,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import React from "react";

const Sidebar = ({ mode, setMode }) => {
  const menu = [
    {
      id: 0,
      menuItem: "Home",
      icon: <Home />,
      link: "#home",
    },
    {
      id: 1,
      menuItem: "Pages",
      icon: <Pages />,
      link: "#pages",
    },
    {
      id: 2,
      menuItem: "Groups",
      icon: <Home />,
      link: "#groups",
    },
    {
      id: 3,
      menuItem: "Marketplace",
      icon: <Storefront />,
      link: "#marketplace",
    },
    {
      id: 4,
      menuItem: "Friends",
      icon: <Person />,
      link: "#friends",
    },
    {
      id: 5,
      menuItem: "Settings",
      icon: <Settings />,
      link: "#settings",
    },
    {
      id: 6,
      menuItem: "Profile",
      icon: <AccountBox />,
      link: "#profile",
    },
  ];
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          {menu.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton component="a" href={item.link}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.menuItem} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton component="a">
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch
                onChange={() => setMode(mode === "light" ? "dark" : "light")}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
