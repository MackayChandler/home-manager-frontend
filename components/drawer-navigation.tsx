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
    <ListItem disablePadding>
      <Link href={route}>
        <ListItemButton>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </Link>
    </ListItem>
  );
}
