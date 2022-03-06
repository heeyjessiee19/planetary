import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';

const NavbarLog = () => {
   
  const imagen = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1024px-React.svg.png";

  return (
    <Navbar bg="dark" variant="dark">
  <Container className='hola'>
    <Navbar.Brand href="/" exact>
      <img
        alt=""
        src={imagen}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
    InnovaPlanetary
    </Navbar.Brand>
    <Nav>
    <Nav.Link href="/" exact>Home</Nav.Link>
  </Nav>
  </Container>
</Navbar>
  )
}

export default NavbarLog