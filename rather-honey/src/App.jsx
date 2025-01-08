import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import HomeSection from "./components/Home";
import FeaturesSection from "./components/Features";
import ProductsSection from "./components/Products";
import CategoriesSection from "./components/Categories";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Header/> <HomeSection /> <FeaturesSection /> <ProductsSection /><CategoriesSection/></>} />
        <Route path="/home" element={<HomeSection />} />
        <Route path="/features" element={<FeaturesSection/>} />
        <Route path="/products" element={<ProductsSection/>} />
        <Route path="/categories" element={<CategoriesSection/> } />
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
