"use client"

import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { ListOfUsers } from './ListOfUsers';

const UserTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Documento</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Celular</TableCell>
            <TableCell>Correo electronico</TableCell>
            <TableCell>Estado</TableCell>
            <TableCell>Acción</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <ListOfUsers />
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
