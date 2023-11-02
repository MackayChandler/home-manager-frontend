import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Badge,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import * as React from "react";
import { useState, useEffect } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChoreList from "./chore-list";
import { RoomDTO } from "../../models/models";

interface RoomItemProps {
  room: RoomDTO
}

export default function RoomListItem({room}:RoomItemProps) {
  return (
    <Grid
      item
      xs={12}
      sm={4}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Badge badgeContent={3} color="error">
        <Card>
          <CardHeader title={room.name}></CardHeader>
          <CardActions>
            <Button>View Chores</Button>
          </CardActions>
        </Card>
      </Badge>
    </Grid>
  );
}
