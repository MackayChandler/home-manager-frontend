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
import BottomAppBar from "../navigation/bottom-app-bar";
import SideDrawer from "../navigation/side-drawer";

export default function Layout({ children }: any) {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container>
      <Grid item xs={12} sm={2}>
        {sm ? (
          <Toolbar sx={{ backgroundColor: "blue", color: "white" }}>
            <Typography>Home Manager</Typography>
          </Toolbar>
        ) : (
          <SideDrawer />
        )}
      </Grid>
      <Grid item xs={12} sm={10}>
        {children}
      </Grid>
      {sm && (
        <Grid item xs={12}>
          <BottomAppBar />
        </Grid>
      )}
    </Grid>
  );
}
