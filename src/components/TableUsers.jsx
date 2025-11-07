import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { fetchAllUser } from '../services/UserService';
import ReactPaginate from 'react-paginate';


const TableUsers = (props) => {
  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    getUsers(1);
  }, []);

  const getUsers = async (page) => {
    let response = await fetchAllUser(page);
    // console.log('>>> check response: ', response);
    if (response && response.data) {
      console.log('>>> check response: ', response);
      setTotalUsers(response.total);
      setTotalPages(response.total_pages);
      setUsers(response.data);
    }
  };

  const handlePageClick = (event) => {
    console.log(event)
    getUsers(event.selected + 1);
  };

  return (
    <>
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
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel="< previous"
        
        pageClassName='page-item'
        pageLinkClassName='page-link'
        previousClassName='page-item'
        previousLinkClassName='page-link'
        nextClassName='page-item'
        nextLinkClassName='page-link'
        breakClassName='page-item'
        breakLinkClassName='page-link'
        containerClassName='pagination'
        activeClassName='active'
      />
    </>
  );
}

export default TableUsers;