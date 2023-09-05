import type { NextPage } from "next";
import { Button, Container, Stack, Toolbar, Typography } from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  return (
    <Container>
      <Typography variant="h2" textAlign={"center"}>
        Welcome to the home manager app
      </Typography>
      {!session?.user ? (
        <>
          <Button variant="outlined" onClick={() => signIn()}>
            Sign In
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              router.push("/auth/signup");
            }}>
            Create Account
          </Button>
        </>
      ) : (
        <Button variant="outlined" onClick={() => signOut()}>
          Sign Out
        </Button>
      )}
    </Container>
  );
};

export default Home;
