import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { Link } from "react-router-dom";

import styles from "./Loginform.module.css";
import { Form, Button } from "react-bootstrap";

function Loginform() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isPending } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };
  return (
    <div className={styles.login}>
      <Form
        className={`${styles.loginForm} ${styles.formGroup}`}
        onSubmit={handleSubmit}
      >
        <h3 className={`${styles.loginText} ${styles.containerFluid}`}>
          Login to be able to like books, add to read list and more
        </h3>
        <div className="mt-4 wrapper-70">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </Form.Group>
        </div>
        <div className="mt-4 wrapper-70">
          {!isPending && !error &&(
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
        <div className="mt-3 wrapper-70">
          <Link className={styles.textSignup} to="/register">
            Not a member? Sign up!
          </Link>
        </div>
      </Form>
    </div>
  );
}
export default Loginform;
