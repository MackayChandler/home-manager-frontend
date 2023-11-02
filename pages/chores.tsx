import { Autocomplete, Container, TextField, Typography } from "@mui/material";
import * as React from "react";
import { useState, useEffect } from "react";
import RoomList from "../components/chores/room-list";
import { useSession } from "next-auth/react";
import { useHomesByUser } from "../services/hooks";
import { HomeDTO } from "../models/models";

export default function Chores() {
  const { data: session } = useSession();
  const { homes, isLoading, mutate } = useHomesByUser(session?.user.id);
  const [selHome, setSelHome] = useState<HomeDTO | null>(null);

  useEffect(() => {
    if (homes) {
      setSelHome(homes.at(0) ?? null);
    }
  }, [homes]);

  return (
    <Container>
      <Typography variant="h4" textAlign={"center"}>
        Chore Tracker
      </Typography>
      <Autocomplete
        options={homes ?? []}
        getOptionLabel={(option) => option.name ?? ""}
        value={selHome}
        onChange={(_, v) => {
          setSelHome(v);
        }}
        sx={{width: "auto"}}
        renderInput={(param) => (
          <TextField
            {...param}
            label={"Home"}
            variant="outlined"
            margin="normal"
          />
        )}
      />
      <RoomList rooms={selHome?.rooms ?? []} />
    </Container>
  );
}
