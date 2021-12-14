import React from "react";
import {useNavigate} from 'react-router-dom';

function LoginForm() {
  let navigate = useNavigate();
  const handleFormSubmit = (event) => {
    event.preventDefault();
  
    if ( event.username === "testuser" && event.password ==="password" ) {
    navigate("/success");
    } else {
    navigate("/failure");
    }
  };

  return (
    <form className="form-container" onSubmit={handleFormSubmit}>
      <div className="form-group">
        <div className="input-field">
          <label htmlFor="username">Username: </label>
          <input name="username" type="text" id="username" />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password: </label>
          <input name="password" type="password" id="password" />
        </div>
        <input type="submit" value="Login" onSubmit={handleFormSubmit} />
      </div>
    </form>
  );
};

export default LoginForm;
