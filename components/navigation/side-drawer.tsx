import {
  Box,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Slide,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import * as React from "react";
import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import HomeIcon from "@mui/icons-material/Home";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DrawerNavItem from "./drawer-navigation";
import "animate.css";
import Home from "../pages";

export default function SideDrawer() {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const containerRef = React.useRef(null);
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      open={open}
      sx={{
        width: "10%",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "10%",
          boxSizing: "border-box",
          background: "#C4DFE1",
        },
        alignItems: "space-between",
      }}
    >
      <Toolbar>
        <Typography variant="h6">Home Manager</Typography>
      </Toolbar>
      <Divider />
      <List>
        <DrawerNavItem icon={<HomeIcon />} text="Home" route="/" />
        <DrawerNavItem
          icon={<CleaningServicesIcon />}
          text="Chores"
          route="/chores"
        />
        <DrawerNavItem
          icon={<FoodBankIcon />}
          text="Pantry Inventory"
          route="/pantry-inventory"
        />
      </List>
    </Drawer>
  );
}
