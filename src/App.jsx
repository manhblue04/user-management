import { useState } from 'react'
import './App.scss'
import Header from './components/Header'
import TableUsers from './components/TableUsers.jsx'
import Container from 'react-bootstrap/Container';

function App() {

  return (
    <>
        <Container>
          <Header />
          <TableUsers />
        </Container>
    </>
  )
}

export default App
