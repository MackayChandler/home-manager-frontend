import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Badge,
  Typography,
} from "@mui/material";
import * as React from "react";
import { useState, useEffect } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChoreList from "./chore-list";

export default function RoomListItem() {
  return (
    <Badge badgeContent={3} color="error" sx={{width: "100%"}}>
      <Accordion sx={{width: "100%"}}>
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
    </Badge>
  );
}
