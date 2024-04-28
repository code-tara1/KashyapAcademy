import { BrowserRouter, Route, Routes } from "react-router-dom";
import SchoolLayout from "../src/layout/SchoolLayout";
import AboutUs from "../src/pages/About";
import { Blogs } from "../src/pages/Blogs";
import { BlogDetail } from "../src/pages/Blogs/BlogDetail";
import { Contact } from "../src/pages/Contact";
import { Course } from "../src/pages/Course";
import Events from "../src/pages/Events";
import { Gallery } from "../src/pages/Gallery";
import { GalleryDetail } from "../src/pages/Gallery/GalleryDetail";
import HomePage from "../src/pages/Homepage";
import { OurTeam } from "../src/pages/OurTeam";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* school layout */}
        <Route path={`school/`} element={<SchoolLayout />}>
          <Route index element={<HomePage />} />
          <Route path={`about`} element={<AboutUs />} />
          <Route path={`events`} element={<Events />} />
          <Route path={`contact`} element={<Contact />} />
          <Route path={`blogs`} element={<Blogs />} />
          <Route path={`blogs/:id`} element={<BlogDetail />} />
          <Route path={`gallery`} element={<Gallery />} />
          <Route path={`gallery/:id`} element={<GalleryDetail />} />
          <Route path={`course`} element={<Course />} />
          <Route path={`our-team`} element={<OurTeam />} />
        </Route>
        {/* college layout */}
        <Route path={`college/`} element={<SchoolLayout />}>
          <Route index element={<HomePage />} />
          <Route path={`about`} element={<AboutUs />} />
          <Route path={`events`} element={<Events />} />
          <Route path={`contact`} element={<Contact />} />
          <Route path={`blogs`} element={<Blogs />} />
          <Route path={`blogs/:id`} element={<BlogDetail />} />
          <Route path={`gallery`} element={<Gallery />} />
          <Route path={`gallery/:id`} element={<GalleryDetail />} />
          <Route path={`course`} element={<Course />} />
          <Route path={`our-team`} element={<OurTeam />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
