import { BottomNavigationAction, BottomNavigation, Paper } from "@mui/material";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import HomeIcon from "@mui/icons-material/Home";
import * as React from "react";
import { useState } from "react";
import { useRouter } from "next/router";

export default function BottomAppBar() {
  const [value, setValue] = useState(0);
  const router = useRouter();
  const LINKS = ["/", "/chores", "/pantry-inventory"];
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        sx={{
          top: "auto",
          bottom: 0,
          backgroundColor: "#27b7de",
          "& .Mui-selected": { color: "#ffffff" },
        }}
        showLabels
        value={value}
        onChange={(e, newValue) => {
          setValue(newValue);
          router.push(LINKS[newValue]);
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction
          label="Chores"
          icon={<CleaningServicesIcon />}
        />
        <BottomNavigationAction
          label="Pantry Inventory"
          icon={<FoodBankIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}
