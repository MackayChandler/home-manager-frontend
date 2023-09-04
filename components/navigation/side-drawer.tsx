import {
  Box,
  Divider,
  Drawer,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import * as React from "react";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import HomeIcon from "@mui/icons-material/Home";
import DrawerNavItem from "./drawer-navigation";
import Image from "next/image";
import AccountLoginButton from "./account-login-button";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { MenuOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function SideDrawer() {
  const theme = useTheme();
  const medium = useMediaQuery(theme.breakpoints.up("md"));
  const router = useRouter();
  const [collapse, setCollapse] = useState(false);

  useEffect(() => {
    if (!medium) {
      setCollapse(true);
    } else {
      setCollapse(false);
    }
  }, [medium]);

  return (
    <Sidebar
      style={{ height: "100vh", backgroundColor: "lightblue" }}
      collapsed={collapse}>
      <Menu>
        <MenuItem
          icon={<MenuOutlined />}
          style={{ textAlign: "center" }}
          onClick={() => {
            setCollapse(!collapse);
          }}>
          <Typography>Test</Typography>
        </MenuItem>
        <MenuItem
          icon={<HomeIcon />}
          onClick={() => {
            router.push("/");
          }}>
          <Typography>Home</Typography>
        </MenuItem>
        <MenuItem
          icon={<CleaningServicesIcon />}
          onClick={() => {
            router.push("/chores");
          }}>
          <Typography>Chores</Typography>
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}
