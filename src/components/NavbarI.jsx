import React from 'react'
import {auth} from '../firebase';
import { Container, Navbar, Nav } from 'react-bootstrap';

const NavbarI = (props) => {

    const imagen = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1024px-React.svg.png";
    const cerrarSesion = () => {
        auth.signOut()
            .then(() => {
                props.history.push('/log')
            })
    }

  return (
    <Navbar bg="dark" variant="dark">
  <Container>
    <Navbar.Brand href="/inicio" exact>
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
    <Nav.Link href="/mercury">Mercury</Nav.Link>
    </Nav>
    <Nav>
    <Nav.Link href="/venus">Venus</Nav.Link>
    </Nav>
    <Nav>
    <Nav.Link href="/earth">Earth</Nav.Link>
    </Nav>
    <Nav>
    <Nav.Link href="/mars">Mars</Nav.Link>
    </Nav>
    <Nav>
    <Nav.Link href="/jupiter">Jupiter</Nav.Link>
    </Nav>
    <Nav>
    <Nav.Link href="/saturn">Saturn</Nav.Link>
    </Nav>
    <Nav>
    <Nav.Link href="/uranus">Uranus</Nav.Link>
    </Nav>
    <Nav>
    <Nav.Link href="/neptune">Neptune</Nav.Link>
    </Nav>
    <Nav>
        {
            props.firebaseUser !== null ? (
                <Nav.Link href="/log" onClick={() => cerrarSesion()}>Log Out</Nav.Link>
            ): (
                <Nav.Link href="/inicio">Home</Nav.Link>
            )
        }
    </Nav>
    
  </Container>
</Navbar>
  )
}

export default NavbarI