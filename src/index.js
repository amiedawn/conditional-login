import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Routes, Route, Navigate, Link, Outlet } from 'react-router-dom';
import "./index.css";

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
  <Routes>
    <Route path="/" element={<Home />} />
    {/* "replace" allows the back button to work on the browser and take you back to home */}
    <Route path="/myapps" element={<Navigate replace to="/learn" />} />
    <Route path="/learn" element={<Learn />} >
      <Route path="courses" element={<Courses />} />
      <Route path="bundles" element={<Bundles />} />
    </Route>
    </Routes>
  </Router>,
  document.getElementById("root")
);

function Home() {
  return (
    <div>
      <h1>
        Home Route
      </h1>
    </div>
  )
};

function Learn() {
  return (
    <div>
      <h1>Learn</h1>
      <h4>All courses are listed here</h4>
      <Link className="btn btn-success" to="/learn/courses">
        courses
      </Link>
      <Link className="btn btn-primary" to="/learn/bundles">
        bundles
      </Link>
      <Outlet />
    </div>
  );
};

function Courses() {
  return (
    <div>
      <h1>
    Courses list
      </h1>
      <h4>
    Courses card
      </h4>
    </div>
  )
};

function Bundles() {
  return (
    <div>
      <h1>
    Bundle list
      </h1>
      <h4>
    Bundle card
      </h4>
    </div>
  )
};

reportWebVitals();
