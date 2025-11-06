import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { fetchAllUser } from '../services/UserService';

const TableUsers = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    let response = await fetchAllUser();
    if (response && response.data) {
      setUsers(response.data.users);
    }
  };
  console.log(users);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        {users && users.length > 0 &&
          users.map((user) => (
            <tr key={`user-${user.id}`}> 
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  );
}

export default TableUsers;