import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import "./index.css";
import LoginForm from "./components/LoginForm";
import Success from "./components/pages/Success";
import Failure from "./components/pages/Failure";

export default function AppNew() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/success" element={<Success />} />
        <Route path="/failure" element={<Failure />} />
        <Route path="*" element={<LoginForm />} />
      </Routes>
    </Router>
  );
};