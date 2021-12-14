import React, {useState} from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import "./index.css";

export default function Login() {
  const navigate=useNavigate();
  const userMatch = {
    username: "testuser",
    password: "password123",
  };

  const [user, setUser] = useState({ username: "" });
  const [error, setError] = useState("");
  var isValid = false;
  var path = "";

  const match = (data) => {
    console.log(data);

    if (
      data.username === userMatch.username &&
      data.password === userMatch.password
    ) {
      setUser({
        username: user.username,
      });
      isValid = true;
      path = "success";
      console.log("isValid: ", isValid);
      console.log("path:", path);
      navigate("/success");
    } else {
      setError("");
      isValid = false;
      path = "failure";
      console.log("isValid:", isValid);
      console.log("path:", path);
      navigate("/failure");
    }
    // return isValid;
    return path;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/failure" element={<Failure />} />
          <Route path="/success" element={<Success />} />
        </Routes>
    </Router>
  );

  function LoginForm() {
    const [formState, setFormState] = useState({ username: "", password: "" });

    const handleFormSubmit = (event) => {
      event.preventDefault();
      match(formState);
    };

    return (
      <form className="form-container" onSubmit={handleFormSubmit}>
        <div className="form-group">
          {error !== "" ? <div className="error">{error}</div> : ""}
          <div className="input-field">
            <label htmlFor="username">Username: </label>
            <input
              name="username"
              type="text"
              id="username"
              onChange={(e) =>
                setFormState({ ...formState, username: e.target.value })
              }
              value={formState.username}
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password: </label>
            <input
              name="password"
              type="password"
              id="password"
              onChange={(e) =>
                setFormState({ ...formState, password: e.target.value })
              }
              value={formState.password}
            />
          </div>
          <input type="submit" value="Login" />
        </div>
     </form>
    );
  };

  function Failure() {
    return (
      <div>
        <h2>Login credentials incorrect!</h2>
      </div>
    );
  };

  function Success() {
    return (
      <div>
        <h2>Success! Your login credentials are a match!</h2>
      </div>
    );
  };

  function Home() {
    return (
      <div>
        <h1>Home Route</h1>
      </div>
    );
  };

};