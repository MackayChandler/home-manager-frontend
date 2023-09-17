import { Box, Button, Container, Grid, Typography } from "@mui/material";
import * as React from "react";
import HomeCard from "../components/home-manager/home-card";
import { Add } from "@mui/icons-material";

export default function HomeManager() {
  return (
    <Container>
      <Typography variant="h2" textAlign={"center"}>
        Homes
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: "2vh" }}>
        <Button variant="contained" startIcon={<Add />}>
          Add Home
        </Button>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <HomeCard />
        </Grid>
        <Grid item xs={12} md={6}>
          <HomeCard />
        </Grid>
        <Grid item xs={12} md={6}>
          <HomeCard />
        </Grid>
        <Grid item xs={12} md={6}>
          <HomeCard />
        </Grid>
      </Grid>
    </Container>
  );
}
