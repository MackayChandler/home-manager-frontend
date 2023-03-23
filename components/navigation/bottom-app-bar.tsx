import {
  AppBar,
  Toolbar,
  IconButton,
  SwipeableDrawer,
  MenuItem,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import HomeIcon from "@mui/icons-material/Home";
import * as React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function BottomAppBar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <>
      <AppBar position="fixed" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Link href="/">
            <IconButton>
              <HomeIcon sx={{ color: "white" }} />
            </IconButton>
          </Link>
          <Link href="/chores">
            <IconButton>
              <CleaningServicesIcon sx={{ color: "white" }} />
            </IconButton>
          </Link>
          <IconButton>
            <FoodBankIcon sx={{ color: "white" }} />
          </IconButton>
          <IconButton onClick={toggleDrawer}>
            <MenuIcon sx={{ color: "white" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor="top"
        open={openDrawer}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
        <MenuItem>Test</MenuItem>
        <MenuItem>Test1</MenuItem>
        <MenuItem>Test2</MenuItem>
      </SwipeableDrawer>
    </>
  );
}
