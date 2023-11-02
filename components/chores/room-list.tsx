import { Grid, List } from "@mui/material";
import * as React from "react";
import RoomListItem from "./room-list-item";
import { HomeDTO, RoomDTO } from "../../models/models";

interface RoomListProps {
  rooms: RoomDTO[];
}

export default function RoomList({ rooms }: RoomListProps) {
  return (
    <Grid container spacing={2} sx={{ marginTop: "5%" }}>
      {rooms.map((r) => (
        <RoomListItem key={r.id} room={r} />
      ))}
    </Grid>
  );
}
