import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  //   console.log(user);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(firstname, email);
    if (!firstname || !email) return;
    setUser({ name: firstname, email: email });
    navigate("/dashboard");

    setFirstname("");
    setEmail("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="firstName"
            placeholder="please insert your name ..."
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="please insert your email ..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn">
            Loggin
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
