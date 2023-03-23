import { Container, Typography } from "@mui/material";
import * as React from "react";
import { useState, useEffect } from "react";
import RoomList from "../components/chores/room-list";

export default function Chores() {
  return (
    <Container>
      <Typography variant="h4" textAlign={"center"}>
        Chore Tracker
      </Typography>
      <RoomList />
    </Container>
  );
}
