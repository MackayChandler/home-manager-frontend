import {
  Drawer,
  IconButton,
  MenuItem,
  Stack,
  SwipeableDrawer,
  Toolbar,
} from "@mui/material";
import * as React from "react";
import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";

export default function Layout({ children }: any) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <Stack>
      <Toolbar sx={{ justifyContent: "flex-end" }}>
        <IconButton onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
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
      <div>{children}</div>
    </Stack>
  );
}
