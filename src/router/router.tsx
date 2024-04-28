import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../pages/About";
import { Blogs } from "../pages/Blogs";
import { BlogDetail } from "../pages/Blogs/BlogDetail";
import { Contact } from "../pages/Contact";
import { Course } from "../pages/Course";
import Events from "../pages/Events";
import { Gallery } from "../pages/Gallery";
import { GalleryDetail } from "../pages/Gallery/GalleryDetail";
import { OurTeam } from "../pages/OurTeam";

export const router = createBrowserRouter([
  { path: "about", element: <AboutUs /> },
  { path: "contact", element: <Contact /> },
  { path: "blogs", element: <Blogs /> },
  { path: "blogs/:id", element: <BlogDetail /> },
  { path: "events", element: <Events /> },
  { path: "gallery", element: <Gallery /> },
  { path: "gallery/:id", element: <GalleryDetail /> },
  { path: "our-team", element: <OurTeam /> },
  { path: "course/:id", element: <Course /> },
]);
