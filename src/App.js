import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Success from "./components/success/Success";
import Failure from "./components/failure/Failure";

function App() {
  const userMatch = {
    username: "testuser",
    password: "password123",
  };

  const [user, setUser] = useState({ username: "" });
  const [error, setError] = useState("");

  const Login = (data) => {
    console.log(data);

    if (
      data.username === userMatch.username &&
      data.password === userMatch.password
    ) {
      setUser({
        username: data.username,
      });
    } else {
      setError("invalid credentials");
    }
  };

  return (
    <div className="App">
      {/* from Mahendra start */}
      {/* <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        {this.state.authenticated && (
          <Route exact path="/Welcome" component={Welcome} />
        )}
      </Switch> */}
      {/* from Mahendra end */}

      {user.username !== "" && user.password !== "" ? (
        <div className="welcome">
          <h2>login successful</h2>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
      {/* </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
