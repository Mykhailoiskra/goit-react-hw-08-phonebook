import { useSelector, useDispatch } from "react-redux";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

import { isLoggedIn, userName } from "redux/auth/authSelectors";
import operations from "redux/auth/authOperations";

export default function Header() {
  const userLoggedIn = useSelector(isLoggedIn);
  const name = useSelector(userName);
  const dispatch = useDispatch();

  return (
    <Navbar expand="md" bg="dark" variant="dark">
      <Navbar.Brand href="/">Contacts Book</Navbar.Brand>

      <Nav className="mr-auto">
        <Nav.Link href="/register">Register</Nav.Link>
        <Nav.Link href="/login">Log In</Nav.Link>
        <Nav.Link href="/contacts">Contacts</Nav.Link>
      </Nav>
      {userLoggedIn && (
        <>
          <Navbar.Text>Hello, {name}</Navbar.Text>
          <Button
            type="button"
            size="sm"
            onClick={() => dispatch(operations.logout())}
          >
            Log out
          </Button>
        </>
      )}
    </Navbar>
  );
}
