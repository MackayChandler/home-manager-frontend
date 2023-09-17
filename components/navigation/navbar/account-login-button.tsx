import {
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";
import * as React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useRouter } from "next/router";

export default function AccountLoginButton() {
  const { data: session, status } = useSession();
  const router = useRouter();
  return (
    <>
      {status === "unauthenticated" ? (
        <Button
          onClick={() => signIn()}
          startIcon={<AccountCircleIcon />}
          variant="outlined"
          sx={{borderRadius: "90px"}}
          >
          Sign In
        </Button>
      ) : (
        <Button
          onClick={() => signOut()}
          startIcon={<AccountCircleIcon />}
          variant="outlined"
          sx={{borderRadius: "90px"}}
          >
          Sign Out
        </Button>
      )}
    </>
  );
}
