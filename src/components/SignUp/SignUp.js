import { useState } from "react";
import { useSignUp } from "../../hooks/useSignUp";

import "./SignUp.css";

function SignUp(params) {
  const [displayName,setDisplayName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const {signup,isPending,error} = useSignUp();

  const handleSubmit = (e) =>{
    e.preventDefault();
    signup(email,password,displayName)
  }

  return (
    <div className="signUpWrapper wrapper-70">
      <form onSubmit={handleSubmit} id="signUp">
      <div className="form-group">
          <label style={{marginBottom:"2rem"}}>
            <span>Name</span>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              onChange={(e) => setDisplayName(e.target.value)}
              value={displayName}
            />
          </label>
        </div>
        <div className="form-group">
          <label style={{marginBottom:"2rem"}}>
            <span>Email address</span>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
        </div>
        <div className="form-group">
          <label  style={{marginBottom:"2rem"}}>
            <span>Password</span>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>
        </div>
        <div className="wrapper-70">
        {!isPending && <button className="btn btn-primary">
          Submit
        </button>}
        {isPending && <button className="btn btn-primary" disabled>loading</button>}
        {error && <p>{error}</p>}
        </div>
      </form>
    </div>
  );
}
export default SignUp;
