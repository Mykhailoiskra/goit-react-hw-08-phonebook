import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { isLoggedIn, userEmail } from "redux/auth/authSelectors";
import operations from "redux/auth/authOperations";

import s from "./Header.module.css";

export default function Header() {
  const userLoggedIn = useSelector(isLoggedIn);
  const user = useSelector(userEmail);
  const dispatch = useDispatch();

  return (
    <Container fluid>
      <Row>
        <Navbar bg="dark" variant="dark" className={s.navBar}>
          <Col>
            <Navbar.Brand as={NavLink} to="/">
              Contacts Book
            </Navbar.Brand>
          </Col>

          {userLoggedIn ? (
            <>
              <Col>
                <Nav.Link as={NavLink} to="/contacts" className={s.link}>
                  Contacts
                </Nav.Link>
              </Col>
              <Col className={s.userMenu} xs={6}>
                <Navbar.Text>Hello, {user}</Navbar.Text>

                <Button
                  type="button"
                  size="sm"
                  variant="outline-light"
                  onClick={() => dispatch(operations.logout())}
                >
                  Log out
                </Button>
              </Col>
            </>
          ) : (
            <>
              <Nav.Link as={NavLink} to="/register" className={s.link}>
                Register
              </Nav.Link>
              <Nav.Link as={NavLink} to="/login" className={s.link}>
                Log In
              </Nav.Link>
            </>
          )}
        </Navbar>
      </Row>
    </Container>
  );
}
