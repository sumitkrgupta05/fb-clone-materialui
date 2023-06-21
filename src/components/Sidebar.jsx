import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import Home from "@mui/icons-material/Home";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Settings from "@mui/icons-material/Settings";
import ArticleIcon from "@mui/icons-material/Article";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import React from "react";

const Sidebar = () => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton compponent="a" href="#home">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton compponent="a" href="#page">
              <ListItemIcon>
                <ArticleIcon />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton compponent="a" href="#group">
              <ListItemIcon>
                <Diversity3Icon />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton compponent="a" href="#marketplace">
              <ListItemIcon>
                <LocalGroceryStoreIcon />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton compponent="a" href="#friends">
              <ListItemIcon>
                <GroupAddIcon />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton compponent="a" href="#setting">
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton compponent="a" href="#profile">
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton compponent="a" href="">
              <ListItemIcon>
                <NightsStayIcon />
              </ListItemIcon>
              <Switch />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
