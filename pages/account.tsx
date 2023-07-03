import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import * as React from "react";

export default function Account() {
  return (
    <Container>
      <Card>
        <CardHeader title="Account Information" />
        <CardContent>
          <Stack>
            <TextField label="First Name" margin="normal" />
            <TextField label="Last Name" margin="normal" />
            <TextField label="Email" margin="normal" />
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
}
