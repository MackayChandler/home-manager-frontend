import { Add, Clear, Edit, ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
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
import { HomeDTO } from "../../models/models";
import { deleteHome } from "../../services/services";
import { useConfirm } from "material-ui-confirm";
import MemberList from "./member-list";
import RoomList from "./room-list";

interface HomeCardProps {
  home: HomeDTO;
  mutate: () => {};
}

export default function HomeCard({ home, mutate }: HomeCardProps) {
  //Confirmation dialog hook
  const confirm = useConfirm();

  //Sends a request to delete a home from the database
  const removeHome = async () => {
    try {
      confirm({
        title: "Are you sure you want to delete this home?",
        description:
          "This will remove the home from all the members of the home.",
      }).then(async () => {
        await deleteHome(home.uniqueId ?? "");
        mutate();
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Card>
      <CardHeader
        title={home.name}
        action={
          <>
            <Tooltip title={"Delete Home"}>
              <IconButton onClick={removeHome}>
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
          <AccordionDetails>
            <Button startIcon={<Add/>}>Add Room</Button>
            <RoomList rooms={home.rooms ?? []} />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            Members
          </AccordionSummary>
          <AccordionDetails>
            <Button startIcon={<Add/>}>Add Home Member</Button>
            <MemberList members={home.members ?? []} />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>Notes</AccordionSummary>
          <AccordionDetails>{home.notes}</AccordionDetails>
        </Accordion>
      </CardContent>
    </Card>
  );
}
