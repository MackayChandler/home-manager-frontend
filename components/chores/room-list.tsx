import { Grid, List } from '@mui/material';
import * as React from 'react';
import RoomListItem from './room-list-item';

export default function RoomList() {
    return (
        <Grid container>
            <RoomListItem/>
            <RoomListItem/>
            <RoomListItem/>
            <RoomListItem/>
            <RoomListItem/>
        </Grid>
    )
}