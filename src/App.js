import { Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import Container from "react-bootstrap/Container";
import ContactList from "views/ContactList";
import Header from "components/Header";
import Homepage from "views/Homepage";
import Register from "views/Register";
import Login from "views/Login";
import PrivateRoute from "components/PrivateRoute";
import PublicRoute from "components/PublicRoute";

import operations from "redux/auth/authOperations";

import "./App.css";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <Header />

      <Switch>
        <PublicRoute exact path="/">
          <Homepage />
        </PublicRoute>

        <PublicRoute path="/register" redirectTo="/contacts" restricted>
          <Register />
        </PublicRoute>

        <PublicRoute path="/login" redirectTo="/contacts" restricted>
          <Login />
        </PublicRoute>

        <PrivateRoute path="/contacts" redirectTo="/login">
          <ContactList />
        </PrivateRoute>
      </Switch>
    </Container>
  );
}
