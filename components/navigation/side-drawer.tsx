import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import * as React from "react";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import HomeIcon from "@mui/icons-material/Home";
import DrawerNavItem from "./drawer-navigation";
import Image from "next/image";
import AccountLoginButton from "./account-login-button";


export default function SideDrawer() {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: "15%",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "15%",
          boxSizing: "border-box",
          background: "#C4DFE1",
        },
        alignItems: "space-between",
      }}
    >
      <Toolbar>
        <Image src={"/logo.png"} alt="logo" width={175} height={75} />
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

      <AccountLoginButton />
    </Drawer>
  );
}
