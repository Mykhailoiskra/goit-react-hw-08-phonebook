import { Switch, Route } from "react-router-dom";

import Container from "react-bootstrap/Container";

import ContactList from "views/ContactList";
import Header from "components/Header";
import Homepage from "views/Homepage";
import Register from "views/Register";
import Login from "views/Login";

import "./App.css";

export default function App() {
  return (
    <Container>
      <Header />

      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/contacts" component={ContactList} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </Container>
  );
}
