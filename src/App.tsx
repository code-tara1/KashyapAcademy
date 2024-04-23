import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CollegeLayout } from "./layout/CollegeLayout";
import { SchoolLayout } from "./layout/SchoolLayout";
import { Home } from "./pages";
import { AboutUs } from "./pages/About";
import { Contact } from "./pages/Contact";
import { HomePage } from "./pages/Homepage";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="school" element={<SchoolLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="college" element={<CollegeLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutUs />} />

          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
