import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function Header() {
  return (
    <Navbar expand="md" bg="dark" variant="dark">
      <Navbar.Brand href="/">Contacts Book</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/register">Register</Nav.Link>
          <Nav.Link href="/login">Log In</Nav.Link>
          <Nav.Link href="/contacts">Contacts</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
