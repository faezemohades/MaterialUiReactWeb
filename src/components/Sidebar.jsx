import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Switch,
} from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SettingsIcon from "@mui/icons-material/Settings";
import ArticleIcon from "@mui/icons-material/Article";
import GroupIcon from "@mui/icons-material/Group";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PersonIcon from "@mui/icons-material/Person";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import ListCard from './ListCard'
function Sidebar({setMode,mode}) {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">

      
      <ListCard href='#home' primary="Homepage">
      <HomeIcon />
      </ListCard>
      <ListCard href='#home' primary="Pages">
      <ArticleIcon />
      </ListCard>
      <ListCard href='#home' primary="Groups">
      <GroupIcon />
      </ListCard>
      <ListCard href='#home' primary="Marketplace">
      <StorefrontIcon />
      </ListCard>
      <ListCard href='#home' primary="Friends">
      <PersonIcon />
      </ListCard>
      <ListCard href='#home' primary="Settings">
      <SettingsIcon />
      </ListCard>
      <ListCard href='#home' primary="Profile">
      <AccountBoxIcon />
      </ListCard>
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <ModeNightIcon />
            </ListItemIcon>
            <Switch  onChange={()=>setMode(mode==="light" ?"dark" : "light")} />
          </ListItemButton>
        </ListItem>
      </List>
      </Box>
    </Box>
  );
}

export default Sidebar;
