import { Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import Loader from "react-loader-spinner";
import Container from "react-bootstrap/Container";
import ContactList from "views/ContactList";
import Header from "components/Header";
import Homepage from "views/Homepage";
import Register from "views/Register";
import Login from "views/Login";
import PrivateRoute from "components/PrivateRoute";
import PublicRoute from "components/PublicRoute";

import operations from "redux/auth/authOperations";
import { isFetchingUser } from "redux/auth/authSelectors";

import "./App.css";

export default function App() {
  const dispatch = useDispatch();
  const fetchingUser = useSelector(isFetchingUser);

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);

  return fetchingUser ? (
    <Loader
      type="Puff"
      color="#343a40"
      height={150}
      width={150}
      style={{
        textAlign: "center",
        marginTop: "100px",
      }}
    />
  ) : (
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
