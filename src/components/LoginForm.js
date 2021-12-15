import React from "react";
import {useNavigate} from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  const handleFormSubmit = (event) => {
    event.preventDefault();
  
    if ( event.target.elements.username.value === "testuser" && event.target.elements.password.value === "password" ) {
    navigate("/success");
    } else {
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
        <button type="submit" className="btn btn-warning">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
