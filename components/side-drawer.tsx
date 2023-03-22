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
  Toolbar,
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

export default function SideDrawer() {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <Container>
      {open ? (
        <Drawer
          variant="persistent"
          anchor="left"
          open={open}
          sx={{
            width: "10%",
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: "10%",
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar sx={{ justifyContent: "flex-end" }}>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List>
            <DrawerNavItem icon={<HomeIcon />} text="Home" route="/" />
            <DrawerNavItem icon={<CleaningServicesIcon />} text="Chores" route="/chores" />
            <DrawerNavItem icon={<FoodBankIcon />} text="Pantry Inventory" route="/pantry-inventory" />
          </List>
        </Drawer>
      ) : (
        <Toolbar>
          <IconButton onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      )}
    </Container>
  );
}
