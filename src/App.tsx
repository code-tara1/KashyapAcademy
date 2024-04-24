import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CollegeLayout } from "./layout/CollegeLayout";
import { Contact } from "./pages/Contact";
import HomePage from "./pages/Homepage";
import LoadingScreen from "./pages/Loading";
import { OurTeam } from "./pages/OurTeam";
const LazyEvent = lazy(() => import("./pages/Events"));
const LazyAbout = lazy(() => import("./pages/About"));
const Home = lazy(() => import("./pages/"));
const LazySchoolLayout = lazy(() => import("./layout/SchoolLayout"));
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="loading" element={<LoadingScreen />} />
        <Route
          path="school"
          element={
            <Suspense fallback={<LoadingScreen />}>
              <LazySchoolLayout />
            </Suspense>
          }
        >
          <Route index element={<HomePage />} />
          <Route
            path="about"
            element={
              <Suspense fallback={<LoadingScreen />}>
                <LazyAbout />
              </Suspense>
            }
          />
          <Route path="contact" element={<Contact />} />
          <Route
            path="events"
            element={
              <Suspense fallback="loading...">
                <LazyEvent />
              </Suspense>
            }
          />
          <Route path="our-team" element={<OurTeam />} />
        </Route>
        <Route path="college" element={<CollegeLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<LoadingScreen />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="about"
            element={
              <Suspense fallback={<LoadingScreen />}>
                <LazyAbout />
              </Suspense>
            }
          />
          <Route path="contact" element={<Contact />} />
          <Route path="events" element={<LazyEvent />} />

          <Route path="our-team" element={<OurTeam />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
