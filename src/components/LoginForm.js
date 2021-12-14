import React from "react";
import {useNavigate} from 'react-router-dom';

function LoginForm() {
  let navigate = useNavigate();
  const handleFormSubmit = (event) => {
    event.preventDefault();
  
    if ( event.username === "testuser" && event.password === "password" ) {
    navigate("/success");
    } else if ( event.username !== "testuser" || event.password !== "password" ) {
    navigate("/failure");
    }
  };

  return (
    <form className="form-container" onSubmit={handleFormSubmit}>
      <div className="form-group">
        <div className="input-field form-control">
          <label htmlFor="username">Username: </label>
          <input name="username" type="text" id="username" />
        </div>
        <div className="input-field form-control">
          <label htmlFor="password">Password: </label>
          <input name="password" type="password" id="password" />
        </div>
        <button type="submit" className="btn btn-warning" onSubmit={handleFormSubmit}>Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
