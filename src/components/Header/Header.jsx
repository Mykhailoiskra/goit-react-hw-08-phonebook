import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

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
      <Navbar.Brand as={NavLink} to="/">
        Contacts Book
      </Navbar.Brand>

      <Nav>
        {userLoggedIn ? (
          <>
            <Nav.Link as={NavLink} to="/contacts">
              Contacts
            </Nav.Link>
            <Navbar.Text>Hello, {name}</Navbar.Text>
            <Button
              type="button"
              size="sm"
              onClick={() => dispatch(operations.logout())}
            >
              Log out
            </Button>
          </>
        ) : (
          <>
            <Nav.Link as={NavLink} to="/register">
              Register
            </Nav.Link>
            <Nav.Link as={NavLink} to="/login">
              Log In
            </Nav.Link>
          </>
        )}
      </Nav>
    </Navbar>
  );
}
