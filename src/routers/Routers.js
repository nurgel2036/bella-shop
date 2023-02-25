import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./HomeFolder/Home";

import About from "../pages/About";
import SaleListing from "../pages/SaleListing";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import SaleDetail from "../components/UI/SaleDetail";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/sale" element={<SaleListing />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/sale__detail" element={<SaleDetail/>}/>
    </Routes>
  );
};

export default Routers;