import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import HomeSection from "./components/Home";
import FeaturesSection from "./components/Features";
import ProductsSection from "./components/Products";
import CategoriesSection from "./components/Categories";
import ReviewSection from './components/Reviews';
import BlogSection from './components/Blogs';
import Footer from "./components/Footer";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Header/> <HomeSection /> <FeaturesSection /> <ProductsSection /><CategoriesSection/> <ReviewSection/><BlogSection/><Footer/></>} />
        <Route path="/home" element={<HomeSection />} />
        <Route path="/features" element={<FeaturesSection/>} />
        <Route path="/products" element={<ProductsSection/>} />
        <Route path="/categories" element={<CategoriesSection/> } />
        <Route path="/review" element={<ReviewSection />} />
        <Route path="/blogs" element={<BlogSection />} />
        <Route path="/checkout" element={<Footer/>} />
        <Route path="/forgot" element={<div>Forgot Password</div>} />
        <Route path="/signup" element={<div>Signup Page</div>} />
      </Routes>
    </Router>
  );
};

export default App;
