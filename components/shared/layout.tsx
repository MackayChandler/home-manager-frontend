import {
  AppBar,
  Container,
  Drawer,
  Grid,
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
    <Grid container>
      <Grid item xs={0} sm={2}>
        {sm ? <BottomAppBar /> : <SideDrawer />}
      </Grid>
      <Grid item xs={12} sm={10}>
        {children}
      </Grid>
    </Grid>
  );
}
