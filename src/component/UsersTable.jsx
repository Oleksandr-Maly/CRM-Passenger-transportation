import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { Table } from 'react-bootstrap';

export const UsersTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'users'));
      const items = querySnapshot.docs.map((doc) => doc.data());
      setUsers(items);
    };
    fetchData();
  }, []);

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
      {users.map((user) => (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>{user.role}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);
};
