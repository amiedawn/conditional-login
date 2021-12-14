import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Success from "./pages/Success";
// import Failure from "./pages/Failure";

function LoginForm({ match, error, isValid, path }) {
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

      {/* <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to={`/pages/${path}`}>Failure</Link>
            </li>
            <li>
              <Link to={`/pages/${path}`}>Success</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          {/* {!isValid && <Route path="/" element={<LoginForm />} />}  */}
          {/* {
            (isValid = "false" && (
              <Route path={`/pages/${path}`} element={<Failure />} />
            ))
          }
          {
            (isValid = "true" && (
              <Route path={`/pages/${path}`} element={<Success />} />
            ))
          }
        </Routes>
      </Router> */}
    </form>
  );
}

export default LoginForm;
