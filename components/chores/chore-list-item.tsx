import { ListItem, ListItemText } from '@mui/material';
import * as React from 'react';
import { useState, useEffect } from 'react';

export default function ChoreListItem() {
    return (
        <ListItem>
            <ListItemText primary="Vacuum" secondary="Last done: Yesterday"/>
        </ListItem>
    )
}