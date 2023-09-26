import { Box, Button, Container, Grid, Typography } from "@mui/material";
import * as React from "react";
import HomeCard from "../components/home-manager/home-card";
import { Add } from "@mui/icons-material";
import { useHomesByUser } from "../services/hooks";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import HomeDialog from "../components/home-manager/home-dialog";

export default function HomeManager() {
  const { data: session } = useSession();
  const { homes, isLoading, mutate } = useHomesByUser(session?.user.id);
  const [open, setOpen] = useState(false);


  return (
    <Container>
      <Typography variant="h2" textAlign={"center"}>
        Homes
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: "2vh" }}>
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => {
            setOpen(true);
          }}>
          Add Home
        </Button>
      </Box>
      <Grid container spacing={2}>
        {homes?.length == 0 ? (
          <Grid item xs={12}>
            <Typography variant="h4" component={"div"} textAlign={"center"}>
              You do not have any homes
            </Typography>
          </Grid>
        ) : (
          <>
            {homes?.map((home) => (
              <Grid item xs={12} md={6} key={home.id}>
                <HomeCard home={home} mutate={mutate} />
              </Grid>
            ))}
          </>
        )}
      </Grid>
      <HomeDialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        refresh={mutate}
      />
    </Container>
  );
}
