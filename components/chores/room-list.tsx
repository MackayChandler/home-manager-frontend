import { List } from '@mui/material';
import * as React from 'react';
import { useState, useEffect } from 'react';
import RoomListItem from './room-list-item';

export default function RoomList() {
    return (
        <List>
            <RoomListItem/>
            <RoomListItem/>
            <RoomListItem/>
            <RoomListItem/>
            <RoomListItem/>
        </List>
    )
}