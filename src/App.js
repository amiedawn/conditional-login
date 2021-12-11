import "./App.css";
import React, { useState } from "react";
import LoginForm from "./components/LoginForm";


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
      path = "/success";
      console.log("isValid: ", isValid);
      console.log("path: ", path);
     
    } else {
      setError("");
      isValid = false;
      path = "/failure";
      console.log("isValid: ", isValid);
      console.log("path: ", path);
      
    }
    return isValid;
  };

  return (
    <LoginForm match={match} error={error} isValid={isValid} path={path} />
  );
};
