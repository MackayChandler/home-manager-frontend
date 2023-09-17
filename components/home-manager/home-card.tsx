import { Add, Clear, Edit, ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionSummary,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import * as React from "react";

export default function HomeCard() {
  return (
    <Card>
      <CardHeader
        title="Home"
        action={
          <>
            <Tooltip title={"Delete Home"}>
              <IconButton>
                <Clear />
              </IconButton>
            </Tooltip>
            <Tooltip title={"Edit Home"}>
              <IconButton>
                <Edit />
              </IconButton>
            </Tooltip>
          </>
        }
      />
      <CardContent>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>Rooms</AccordionSummary>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            Members
          </AccordionSummary>
        </Accordion>
      </CardContent>
    </Card>
  );
}
