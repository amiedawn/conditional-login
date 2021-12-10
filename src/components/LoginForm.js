import React, { useState } from "react";
// import { Link } from 'react-router-dom';

function LoginForm({ Login, error }) {
  const [formState, setFormState] = useState({ username: "", password: "" });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    Login(formState);

  };


  return (
    <form className="form-container" onSubmit={handleFormSubmit}>
      <div className="form-group">
        {(error !== "") ? (<div className="error">{error}</div>) : ""}
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
          {/* <input name="password" type="password" id="pwd" onChange={handleChange} /> */}
        </div>
        <input type="submit" value="Login" 
          
        />
      </div>
    </form>
  );
}

export default LoginForm;
