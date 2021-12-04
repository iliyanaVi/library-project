import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { Link } from "react-router-dom";
import "./Loginform.css";

function Loginform() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const {login, error, isPending} = useLogin();

  const handleSubmit = (e) =>{
    e.preventDefault();
    login(email, password);
  }
  return (
    <div className="login">
      <form onSubmit={handleSubmit} className="login-form form-group">
        <h3 className="login-text container-fluid">
          Login to be able to like books, add to read list and more
        </h3>
        <div className="login-email mb-3">
          <label htmlFor="email"></label>
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="login-pwd mb-3">
          <label htmlFor="password"></label>
          <input
            type="password"
            className="form-control"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="mt-4 wrapper-70">
          {!isPending && <button type="submit" className="btn btn-primary" >
            Login
          </button>}
          {isPending && <button type="submit" className="btn btn-primary" disabled>
            Loading
          </button>}
          {error && <p>{error}</p>}
        </div>
        <div className="mt-3 wrapper-70">
          <Link className="text-signup" to="/register">Not a member? Sign up!</Link>
        </div>
      </form>
    </div>
  );
}
export default Loginform;
