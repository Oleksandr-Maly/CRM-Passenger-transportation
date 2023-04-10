import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { Table } from 'react-bootstrap';

export const UsersTable = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'drivers'));
      const items = querySnapshot.docs.map((doc) => doc.data());
      setDrivers(items);
    };
    fetchData();
  }, []);

return (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Phone</th>
        <th>License #</th>
        <th>Licence exp.date</th>
      </tr>
    </thead>
    <tbody>
      {drivers.map((driver) => (
        <tr key={user.id}>
          <td>{user.name}</td>
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
