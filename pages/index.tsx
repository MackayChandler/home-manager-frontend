import type { NextPage } from "next";
import { Button, Container, Stack, Toolbar, Typography } from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  return (
    <Container>
      <Typography variant="h2" textAlign={"center"}>
        Welcome to the home manager app
      </Typography>
    </Container>
  );
};

export default Home;
