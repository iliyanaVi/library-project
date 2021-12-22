import { useState } from "react";
import { useSignUp } from "../../hooks/useSignUp";

import styles from "./SignUp.module.css";
import { Form, Button } from "react-bootstrap";

function SignUp(params) {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isPending, error } = useSignUp();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName);
  };

  return (
    <div className={`${styles.signUpWrapper} wrapper-70`}>
      <Form className={styles.signUp} onSubmit={handleSubmit}>
        <div className="mt-4 wrapper-70">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              className="form-control"
              placeholder="Enter your name"
              onChange={(e) => setDisplayName(e.target.value)}
              value={displayName}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </Form.Group>
        </div>
        <div className="mt-4 wrapper-70">
          {!isPending && !error && (
            <Button variant="primary" type="submit">
              Login
            </Button>
          )}
          {isPending && (
            <Button variant="primary" type="submit" disabled>
              Loading
            </Button>
          )}

          {error && (
            <>
              <Button variant="primary" type="submit">
                Login
              </Button>
              <p className={styles.error}>{error}</p>
            </>
          )}
        </div>
      </Form>
    </div>
  );
}
export default SignUp;
