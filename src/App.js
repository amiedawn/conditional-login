import './App.css';
import React, {useState} from "react";
// import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import LoginForm from "./components/Login";
// import Success from './components/success/Success';
// import Failure from './components/failure/Failure';

function App() {
  const userMatch = {
    username: "testuser", 
    password: "password123"
  }

  const [user, setUser] = useState({username: "", password: ""});
  const [error, setError] = useState("");

  const Login = data => {
    console.log(data);

    if (data.username === userMatch.username && data.password === userMatch.password) {
      console.log("Logged in");
    } else {
      console.log("invalid credentials");
    }
  }

  return(
    <div className="App">
      {(user.username !== "" && user.password !=="") ? (
        <div className="success"> 
          <h2>Success! Your login credentials are a match, <span>{user.username}</span>!</h2>
          <button>Logout</button>
        </div>  
      ) : (
        <LoginForm Login={Login} error={error}/>
      )}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/success" element={<Success />}></Route>
          <Route path="/failure" element={<Failure />}></Route>
        </Routes>
      </BrowserRouter>
     <Login /> */}
    </div>
  );
}

export default App;
 