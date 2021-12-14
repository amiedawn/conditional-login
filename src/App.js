import './App.css';
import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Failure from './components/pages/Failure';
import Success from "./components/pages/Success";

export default function App() {
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
        username: data.username,
      });
      isValid = true;
      path = "success";
      console.log("isValid: ", isValid);
      console.log("path: ", path);
     
    } else {
      setError("");
      isValid = false;
      path = "failure";
      console.log("isValid:", isValid);
      console.log("path:", path);
      
    }
    return isValid;
  };

  return (
     <Router>
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
          {!isValid && <Route path="/" element={<LoginForm match={match} error={error} isValid={isValid} path={path}  />} />
          }
          {
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
      </Router>
  );
};
