import { Navbar, Container, Nav } from 'react-bootstrap';

export function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">Roller Coasters</Navbar.Brand>
        <Nav className="me-auto">
          {/* Add nav items here if needed */}
        </Nav>
      </Container>
    </Navbar>
  );
}