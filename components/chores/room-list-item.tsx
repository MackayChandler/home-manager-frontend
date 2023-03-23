import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import * as React from "react";
import { useState, useEffect } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChoreList from "./chore-list";

export default function RoomListItem() {
  return (
    <Accordion>
      <AccordionSummary
        sx={{ flexDirection: "row-reverse" }}
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography>Master Bedroom</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <ChoreList />
      </AccordionDetails>
    </Accordion>
  );
}
