import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { Grid } from "@mui/material";
import { instagram } from "./SVGInsta";

const drawerWidth = 240;

const getListItemIconStyle = () => {
  return { color: "white" };
};

function ResponsiveDrawer() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ color: "white" }}>
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ fontFamily: "'Almarai', sans-serif" }}
          
        >
          {instagram()}
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {[
          {
            text: "Home",
            icon: <HomeIcon style={{ color: "white" }} />,
            path: "/",
          },
          {
            text: "Search",
            icon: <SearchIcon style={{ color: "white" }} />,
            path: "/",
          },
          {
            text: "Explore",
            icon: <ExploreIcon style={{ color: "white" }} />,
            path: "/explore",  
          },
          {
            text: "Reels",
            icon: <SlideshowIcon style={{ color: "white" }} />,
            path: "/",
          },
          {
            text: "Messages",
            icon: <ChatIcon style={{ color: "white" }} />,
            path: "/",
          },
          {
            text: "Notifications",
            icon: <FavoriteBorderIcon style={{ color: "white" }} />,
            path: "/",
          },
          {
            text: "Create",
            icon: <AddCircleOutlineOutlinedIcon style={{ color: "white" }} />,
            path: "/",
          },
        ].map((item, index) => (
          <ListItem
            component={Link}
            to={item.path}
            key={item.text}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText style={{color:"white"}} primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem key="Profile" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  return (
    <Grid container>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ fontFamily: "'Almarai', sans-serif" }}
            >
              Instagram
            </Typography>
          </IconButton>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                borderRight: "1px solid rgba(255, 255, 255, 0.12)",
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                color: "white",
                borderRight: "2px solid  gray",
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <Typography paragraph></Typography>
          <Outlet />
        </Box>
      </Box>
    </Grid>
  );
}

export default ResponsiveDrawer;
