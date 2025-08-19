import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/Home.jsx";
import ContactMe from "./pages/ContactMe.jsx";
import Project from "./pages/Project.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import Error404 from "./pages/Error404.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  </StrictMode>
);
