import type { NextPage } from "next";
import { Container, Stack, Toolbar, Typography } from "@mui/material";

const Home: NextPage = () => {
  return (
    <Container>
      <Typography variant="h2" textAlign={"center"}>
        Welcome to the home manager app
      </Typography>
    </Container>
  );
};

export default Home;
