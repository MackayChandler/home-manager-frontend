import {
  Button,
  IconButton,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import * as React from "react";
import { RoomDTO } from "../../models/models";
import { Edit, Clear, Add } from "@mui/icons-material";
import { useState } from "react";
import { postNewRoom } from "../../services/services";

interface RoomListProps {
  rooms: RoomDTO[];
  refresh: () => void;
  homeId: number;
}

export default function RoomList({ rooms, refresh, homeId }: RoomListProps) {
  const [editContent, setEditContent] = useState(false);
  const [newRoom, setNewRoom] = useState<RoomDTO>({});

  const submitRoom = async () => {
    try {
      setNewRoom({...newRoom, homeId: homeId})
      await postNewRoom(newRoom);
      setEditContent(false);
      setNewRoom({});
      refresh();
    } catch (e) {}
  };

  return (
    <>
      <Button
        startIcon={<Add />}
        onClick={() => {
          setEditContent(true);
        }}>
        Add Room
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rooms.map((room) => (
              <TableRow key={room.id}>
                <TableCell>
                  <Typography>
                    {room.name}
                  </Typography>
                </TableCell>
                <TableCell>
                  <IconButton color="primary">
                    <Edit />
                  </IconButton>
                  <IconButton color="error">
                    <Clear />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            {editContent && (
              <TableRow>
                <TableCell>
                  <TextField
                    defaultValue={newRoom.name}
                    onChange={(e) => {
                      setNewRoom({...newRoom, name: e.target.value});
                    }}
                    value={newRoom.name}
                  />
                </TableCell>
                <TableCell>
                  <Tooltip title={"Save new room"}>
                    <IconButton
                      onClick={() => {
                        submitRoom();
                      }}>
                      <Add />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title={"Cancel"}>
                    <IconButton
                      onClick={() => {
                        setNewRoom({});
                        setEditContent(false);
                      }}>
                      <Clear />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
