import React from 'react';
import UserTable from './UserTable.jsx';
import { AddButton } from './AddButton.jsx';

export default async function UsersPage() {
  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <div>
        <AddButton/>
      </div>
      <UserTable />
    </div>
  );
}
