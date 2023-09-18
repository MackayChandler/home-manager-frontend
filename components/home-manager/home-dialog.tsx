import * as React from "react";
import { HomeDTO } from "../../models/models";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { postNewHome } from "../../services/services";
import { useSession } from "next-auth/react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface HomeDialogProps {
  open: boolean;
  onClose: () => void;
  home?: HomeDTO;
  refresh: () => void;
}

const DEFAULT_HOME: HomeDTO = {
  name: "",
  notes: "",
  uniqueId: "",
};

const validateHome = yup.object().shape({
  name: yup.string().required("Name is required"),
  notes: yup.string().optional(),
  uniqueId: yup.string().optional(),
}) as any;

export default function HomeDialog({
  open,
  onClose,
  home,
  refresh,
}: HomeDialogProps) {

  //Gets the info for the signed in session
  const { data: session } = useSession();

  //Handles the form code
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<HomeDTO>({
    defaultValues: home ?? DEFAULT_HOME,
    resolver: yupResolver(validateHome),
  });

  //Closes the dialog and refreshes the list on the manage-homes page
  const handleClose = () => {
    reset(DEFAULT_HOME);
    refresh();
    onClose();
  };

  //Creates/Edits user changes to homes
  const submitHome = async (home: HomeDTO) => {
    try {
      home.notes = "";
      home.uniqueId = "";
      await postNewHome(home, session?.user.id);
      handleClose();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Dialog open={open}>
      <DialogTitle gutterBottom>{home ? "Edit" : "Add"} Home</DialogTitle>
      <DialogContent>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Name"
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          )}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit(submitHome)}>Add</Button>
      </DialogActions>
    </Dialog>
  );
}
