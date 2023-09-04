import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Badge,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import * as React from "react";
import { useState, useEffect } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChoreList from "./chore-list";

export default function RoomListItem() {
  return (
    <Grid item xs={12} sm={4}>
    <Badge badgeContent={3} color="error" sx={{width: "100%"}}>
      <Card>
        <CardContent>
          <Typography>Test</Typography>
        </CardContent>
      </Card>
    </Badge>
    </Grid>
  );
}
