import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import * as React from "react";
import { RoomDTO } from "../../models/models";
import { putRoom } from "../../services/services";

interface RoomDialogProps {
  open: boolean;
  onClose: () => void;
  room: RoomDTO;
  roomState: React.Dispatch<React.SetStateAction<RoomDTO>>;
}

const RoomDialog = ({ open, onClose, room, roomState }: RoomDialogProps) => {
  const editRoom = async () => {
    try {
      await putRoom(room);
      onClose();
    } catch (e) {}
  };
  return (
    <Dialog open={open}>
      <DialogTitle>Edit Room</DialogTitle>
      <DialogContent>
        <TextField
          value={room.name}
          onChange={(e) => {
            roomState({ ...room, name: e.target.value });
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="error">
          Cancel
        </Button>
        <Button
          onClick={() => {
            editRoom();
          }}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RoomDialog;
