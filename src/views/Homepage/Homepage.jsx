import React from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
// import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
export default function Homepage() {
  return (
    <Jumbotron>
      <h1>Hello, world!</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <p>
        <Button
          variant="primary"
          type="button"
          href="/register
        "
        >
          Register
        </Button>
        <Button variant="primary" type="button" href="/login">
          Log in
        </Button>
      </p>
    </Jumbotron>
  );
}
