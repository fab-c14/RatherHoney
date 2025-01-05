import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import './App.css';
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/home" element={<div>Home Section</div>} />
        <Route path="/features" element={<div>Features Section</div>} />
        <Route path="/products" element={<div>Products Section</div>} />
        <Route path="/categories" element={<div>Categories Section</div>} />
        <Route path="/review" element={<div>Review Section</div>} />
        <Route path="/blogs" element={<div>Blogs Section</div>} />
        <Route path="/checkout" element={<div>Checkout Page</div>} />
        <Route path="/forgot" element={<div>Forgot Password</div>} />
        <Route path="/signup" element={<div>Signup Page</div>} />
      </Routes>
    </Router>
  );
};

export default App;
