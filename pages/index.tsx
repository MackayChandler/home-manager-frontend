import type { NextPage } from "next";
import { Button, Container, Stack, Toolbar, Typography } from "@mui/material";
import { signIn } from "next-auth/react";

const Home: NextPage = () => {
  return (
    <Container>
      <Typography variant="h2" textAlign={"center"}>
        Welcome to the home manager app
      </Typography>
      <Button onClick={() => signIn()}>Sign In</Button>
    </Container>
  );
};

export default Home;
