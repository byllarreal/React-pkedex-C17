import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

export function BarraNav(){
    return(
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
            <Link to="/">
                <Navbar.Brand >Home</Navbar.Brand>
            </Link>
          <Nav className="me-auto">
            <Link to="/Premiumplay">
            <Navbar.Brand >!Es Pikachu</Navbar.Brand>
            </Link>
            <Link to="/Premiummusic/vip">
            <Navbar.Brand >Play list</Navbar.Brand>
            </Link>            
          </Nav>
        </Container>
      </Navbar>
    )
}