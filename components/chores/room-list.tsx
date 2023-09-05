import { Grid, List } from '@mui/material';
import * as React from 'react';
import RoomListItem from './room-list-item';

export default function RoomList() {
    return (
        <Grid container spacing={2} sx={{marginTop: "5%"}}>
            <RoomListItem/>
            <RoomListItem/>
            <RoomListItem/>
            <RoomListItem/>
            <RoomListItem/>
        </Grid>
    )
}