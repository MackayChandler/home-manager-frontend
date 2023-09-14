import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Stack,
  TextField,
} from "@mui/material";
import * as React from "react";
import { useState, useEffect } from "react";
import { UserDTO } from "../../models/models";
import { registerUser } from "../../services/services";

const DEFAULT_USER: UserDTO = {
  username: "",
  firstName: "",
  lastName: "",
  password: "",
};

export default function SignUp() {
  const [newUser, setNewUser] = useState<UserDTO>(DEFAULT_USER);
  const [password2, setPassword2] = useState("");
  const [verifyError, setVerifyError] = useState(false);
  useEffect(() => {
    if (password2 !== newUser.password) {
      setVerifyError(true);
    } else {
      setVerifyError(false);
    }
  }, [newUser.password, password2]);

  const submitUser = async () => {
    try {
      if (newUser.username != "" && newUser.password != "" && !verifyError) {
        await registerUser(newUser);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <Card>
        <CardHeader title="Sign Up"></CardHeader>
        <CardContent>
          <Stack spacing={2}>
            <TextField
              label="Username"
              value={newUser.username}
              onChange={(e) => {
                setNewUser({ ...newUser, username: e.target.value });
              }}
            />
            <TextField
              label="First Name"
              value={newUser.firstName}
              onChange={(e) => {
                setNewUser({ ...newUser, firstName: e.target.value });
              }}
            />
            <TextField
              label="Last Name"
              value={newUser.lastName}
              onChange={(e) => {
                setNewUser({ ...newUser, lastName: e.target.value });
              }}
            />
            <TextField
              label="Password"
              type="password"
              value={newUser.password}
              onChange={(e) => {
                setNewUser({ ...newUser, password: e.target.value });
              }}
            />
            <TextField
              label="Re-Enter Password"
              type="password"
              value={password2}
              error={verifyError}
              helperText={verifyError ? "Passwords do not match" : ""}
              onChange={(e) => {
                setPassword2(e.target.value);
              }}
            />
            <Button
              variant="outlined"
              onClick={() => {
                if (!verifyError) {
                  submitUser();
                }
              }}>
              Register
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
}
