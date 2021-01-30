import { useState } from "react";
import { useDispatch } from "react-redux";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import operations from "redux/auth/authOperations";

export default function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(operations.register({ name, email, password }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="userName">
        <Form.Label>Your Name</Form.Label>
        <Form.Control
          type="input"
          placeholder="Type your name here"
          autoComplete="off"
          value={name}
          name="name"
          onChange={handleFormChange}
        />
      </Form.Group>
      <Form.Group controlId="userEmail">
        <Form.Label>Your Email Address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Type your email here"
          autoComplete="off"
          value={email}
          name="email"
          onChange={handleFormChange}
        />
      </Form.Group>
      <Form.Group controlId="userPassword">
        <Form.Label>Create Password</Form.Label>
        <Form.Control
          type="Password"
          autoComplete="off"
          value={password}
          name="password"
          onChange={handleFormChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
