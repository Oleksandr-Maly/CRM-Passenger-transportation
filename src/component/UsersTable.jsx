import { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { EditUserForm } from './EditUserForm';

export const UsersTable = ({ loading, error, data, handleDelete }) => {
  const [users, setUsers] = useState([]);
  const [showUserModal, setShowUserModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUpdateUser = (updatedUser) => {
    const index = users.findIndex((user) => user.id === updatedUser.id);
    const newUsers = [...users];
    newUsers[index] = updatedUser;
    setUsers(newUsers);
  }


  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {loading && <p>Loading data...</p>}
        {error && <p>Error loading data: {error.message}</p>}
        {!loading && data && (
          <>
            {data.map((user) => (
              <tr key={user.id}>
                <td
                  onClick={() => {
                    setSelectedUser(user);
                    setShowUserModal(true);
                  }}
                >
                  {user.name}
                </td>
                <td
                  onClick={() => {
                    setSelectedUser(user);
                    setShowUserModal(true);
                  }}
                >
                  {user.email}
                </td>
                <td
                  onClick={() => {
                    setSelectedUser(user);
                    setShowUserModal(true);
                  }}
                >
                  {user.phone}
                </td>
                <td
                  onClick={() => {
                    setSelectedUser(user);
                    setShowUserModal(true);
                  }}
                >
                  {user.role}
                </td>
              </tr>
            ))}
          </>
        )}
      </tbody>
      <Modal show={showUserModal} onHide={() => setShowUserModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <EditUserForm
              setShowUserModal={setShowUserModal}
              onUpdateUser={handleUpdateUser}
              user={selectedUser}
              onCancel={() => setShowEditForm(false)}
            />
        </Modal.Body>
      </Modal>
    </Table>
  );
};
