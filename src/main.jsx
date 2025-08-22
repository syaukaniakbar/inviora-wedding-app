import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/Home.jsx";
import ContactMe from "./pages/ContactMe.jsx";
import Project from "./pages/Project.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import Error404 from "./pages/Error404.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/project", element: <Project /> },
  { path: "/project/:slug", element: <ProjectDetail /> },
  { path: "/contact", element: <ContactMe /> },
  { path: "*", element: <Error404 /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
