import {
  IconButton,
  Popover,
  Toolbar,
  Typography,
  Zoom,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import * as React from "react";
import { useState, useEffect } from "react";
import AccountLoginButton from "./navbar/account-login-button";
import PageLinks from "./navbar/page-links";
import MenuIcon from "@mui/icons-material/Menu";
import { Clear } from "@mui/icons-material";

export default function NavBar() {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const [menuCheck, setMenuCheck] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const id = menuCheck ? "simple-popover" : undefined;
  return (
    <>
      {sm ? (
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100vw",
            mb: "5vh",
          }}>
          <Zoom in={menuCheck} aria-describedby={id}>
            <IconButton
              onClick={() => {
                setMenuCheck(!menuCheck);
              }}
              sx={{ marginRight: "-10vw" }}>
              <Clear />
            </IconButton>
          </Zoom>

          <Zoom in={!menuCheck}>
            <IconButton
              onClick={() => {
                setMenuCheck(!menuCheck);
              }}
              sx={{  }}>
              <MenuIcon />
            </IconButton>
          </Zoom>
          <Popover
            id={id}
            open={menuCheck}
            onClose={handleClose}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
            }}
            transformOrigin={{
                vertical: "top",
                horizontal: "right"
            }}
          >
            <Typography>Test</Typography>
          </Popover>
        </Toolbar>
      ) : (
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100vw",
            mb: "5vh",
          }}>
          <Typography>Home Manager</Typography>
          <PageLinks />
          <AccountLoginButton />
        </Toolbar>
      )}
    </>
  );
}
