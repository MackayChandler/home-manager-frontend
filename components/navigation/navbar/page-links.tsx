import { Box } from "@mui/material";
import Link from "next/link";
import * as React from "react";

export default function PageLinks() {
  return (
    <Box display={"flex"} justifyContent={"space-between"} width={"40vw"}>
      <Link href={"/"}>Home</Link>
      <Link href={"/home-manager"}>Manage Homes</Link>
      <Link href={"/chores"}>Chores</Link>
      <Link href={"/account"}>Profile</Link>
    </Box>
  );
}
