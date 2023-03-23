import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import * as React from "react";
import { useState, useEffect } from "react";

interface DrawerNavProps {
  icon: any;
  text: string;
  route: string;
}

export default function DrawerNavItem({ icon, text, route }: DrawerNavProps) {
  return (
    <Link href={route}>
      <ListItem disablePadding>
        <ListItemButton sx={{ width: "auto" }}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
}
