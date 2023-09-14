import type { NextPage } from "next";
import { Button, Container, Stack, Toolbar, Typography } from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    console.log(session)
  }, [session]);
  return (
    <Container>
      <Typography variant="h2" textAlign={"center"}>
        Welcome to the home manager app
      </Typography>
      
    </Container>
  );
};

export default Home;
