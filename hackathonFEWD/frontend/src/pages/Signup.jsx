import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const user = { name, email };

    localStorage.setItem("htf_user", JSON.stringify(user));

    alert("Registration successful!");

    navigate("/");
  }

  return (
    <div className="auth-container">

      <div className="auth-card">

        <h1>Create Account</h1>
        <p>Join TutorFinder today</p>

        <form onSubmit={handleSubmit}>

          <label>Full Name</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            placeholder="Enter your name"
          />

          <label>Email Address</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            placeholder="Enter email"
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            placeholder="Enter password"
          />

          <button type="submit" className="primary-btn">
            Sign Up
          </button>

        </form>

      </div>

    </div>
  );
}

export default Signup;