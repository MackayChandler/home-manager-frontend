import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { signIn, useSession } from "next-auth/react";
import * as React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useRouter } from "next/router";

export default function AccountLoginButton() {
  const { data: session, status } = useSession();
  const router = useRouter();
  return (
    <List style={{ marginTop: "auto" }}>
      {status === "unauthenticated" ? (
        <ListItem>
          <ListItemButton onClick={() => signIn()}>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText>Login</ListItemText>
          </ListItemButton>
        </ListItem>
      ) : (
        <ListItem>
          <ListItemButton
            onClick={() => {
              router.push("/account");
            }}
          >
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText>{session?.user?.name}</ListItemText>
          </ListItemButton>
        </ListItem>
      )}
    </List>
  );
}
