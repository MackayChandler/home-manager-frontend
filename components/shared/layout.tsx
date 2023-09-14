import { Grid, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import * as React from "react";
import Image from "next/image";
import NavBar from "../navigation/navbar";

export default function Layout({ children }: any) {
  

  return (
    <Grid container>
      <NavBar />
      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  );
}
