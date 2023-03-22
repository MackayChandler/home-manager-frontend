import {
  AppBar,
  Container,
  Drawer,
  IconButton,
  MenuItem,
  Stack,
  SwipeableDrawer,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import * as React from "react";
import { useState, useEffect } from "react";
import BottomAppBar from "../bottom-app-bar";
import SideDrawer from "../side-drawer";

export default function Layout({ children }: any) {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));


  return (
    <Stack>
      {sm ? <BottomAppBar /> : <SideDrawer />}
      <div>{children}</div>
    </Stack>
  );
}
