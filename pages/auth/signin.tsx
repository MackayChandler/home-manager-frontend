import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Stack,
  TextField,
} from "@mui/material";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async () => {
    await signIn("credentials", {
      username: username,
      password: password,
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <Container>
      <Card>
        <CardHeader title="Sign In"></CardHeader>
        <CardContent>
          <Stack spacing={2}>
            <TextField
              variant="outlined"
              name="username"
              type="text"
              label="Username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <TextField
              variant="outlined"
              name="password"
              type="password"
              label="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Button variant="outlined" type="submit" onClick={onSubmit}>
              Sign In
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
}
