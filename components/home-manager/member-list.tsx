import * as React from "react";
import { UserHomeDTO } from "../../models/models";
import {
  IconButton,
  ListItem,
  ListItemText,
  MenuList,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Clear, Edit } from "@mui/icons-material";

interface MemberListProps {
  members: UserHomeDTO[];
}

export default function MemberList({ members }: MemberListProps) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {members.map((member) => (
            <TableRow key={member.id}>
              <TableCell>
                {member.user?.firstName} {member.user?.lastName}
              </TableCell>
              <TableCell>{member.role?.name}</TableCell>
              <TableCell>
                <IconButton color="primary">
                  <Edit />
                </IconButton>
                <IconButton color="error">
                  <Clear />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
