import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Success from "./success/Success";
import Failure from "./failure/Failure";

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
      <Router>
        <Routes>
          {!isValid && <Route exact path="/" element={<Failure />} />}
          {isValid && <Route exact path="/success" element={<Success />} />}
        </Routes>
      </Router>
    </form>
  );
}

export default LoginForm;
