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
import { Edit, Clear, Add, Check } from "@mui/icons-material";
import { useState } from "react";
import { deleteRoom, postNewRoom } from "../../services/services";
import RoomDialog from "./room-dialog";
import { useConfirm } from "material-ui-confirm";

interface RoomListProps {
  rooms: RoomDTO[];
  refresh: () => void;
  homeId: number;
}

export default function RoomList({ rooms, refresh, homeId }: RoomListProps) {
  const [editContent, setEditContent] = useState(false);
  const [newRoom, setNewRoom] = useState<RoomDTO>({});
  const [editRoomField, setEditRoomField] = useState(false);
  const [selRoom, setSelRoom] = useState<RoomDTO>({});
  const confirm = useConfirm();

  const submitRoom = async () => {
    try {
      setNewRoom({ ...newRoom, homeId: homeId });
      await postNewRoom(newRoom);
      setEditContent(false);
      setNewRoom({});
      refresh();
    } catch (e) {}
  };

  const removeRoom = async (id: number) => {
    try {
      confirm({
        description:
          "By deleting this room you will delete any chores connected to this room",
        title: "Are you sure you want to delete this room?",
      }).then(async (_) => {
        await deleteRoom(id);
        refresh();
      });
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
                <>
                  <TableCell>
                    <Typography>{room.name}</Typography>
                  </TableCell>
                  <TableCell>
                    <Tooltip title={"edit room"}>
                      <IconButton
                        color="primary"
                        onClick={() => {
                          setSelRoom(room);
                          setEditRoomField(true);
                        }}>
                        <Edit />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title={"remove room"}>
                      <IconButton
                        color="error"
                        onClick={() => {
                          removeRoom(room.id ?? 0);
                        }}>
                        <Clear />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </>
              </TableRow>
            ))}
            {editContent && (
              <TableRow>
                <TableCell>
                  <TextField
                    defaultValue={newRoom.name}
                    onChange={(e) => {
                      setNewRoom({ ...newRoom, name: e.target.value });
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
      <RoomDialog
        open={editRoomField}
        onClose={() => {
          refresh();
          setEditRoomField(false);
        }}
        room={selRoom}
        roomState={setSelRoom}
      />
    </>
  );
}
