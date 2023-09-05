import {
  Grid,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import * as React from "react";
import BottomAppBar from "../navigation/bottom-app-bar";
import SideDrawer from "../navigation/side-drawer";
import Image from "next/image";

export default function Layout({ children }: any) {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container>
      <Grid item xs={12} sm={3}>
        {sm ? (
          <Toolbar sx={{ backgroundColor: "#27b7de", color: "black" }}>
            <Image src={'/logo.png'} alt="logo" width={200} height={75}/>
          </Toolbar>
        ) : (
          <SideDrawer />
        )}
      </Grid>
      <Grid item xs={12} sm={9}>
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
