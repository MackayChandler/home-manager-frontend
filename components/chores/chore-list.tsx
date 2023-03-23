import { List, ListItemText } from '@mui/material';
import * as React from 'react';
import { useState, useEffect } from 'react';
import ChoreListItem from './chore-list-item';

export default function ChoreList() {
    return (
        <List>
            <ChoreListItem />
            <ChoreListItem />
            <ChoreListItem />
            <ChoreListItem />
            <ChoreListItem />
            <ChoreListItem />
            
        </List>
    )
}