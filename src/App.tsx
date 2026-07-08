import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const Home = lazy(() => import("./Components/Home"));
const Guidelines = lazy(() => import("./Components/Guidelines"));
const About = lazy(() => import("./Components/About"));
const Speakers = lazy(() => import("./Components/Speakers"));
const Committee = lazy(() => import("./Components/Committee"));
const CallForPapers = lazy(() => import("./Components/CallForPapers"));
const Register = lazy(() => import("./Components/Register"));
const Contact = lazy(() => import("./Components/Contact"));
const REVIEW_POLICY = lazy(() => import("./Components/REVIEW-POLICY"));
const PLAGIARISM_POLICY = lazy(() => import("./Components/PLAGIARISM-POLICY"));
const AdvisoryBoard = lazy(() => import("./Components/AdvisoryBoard"));
const TechnicalProgram = lazy(() => import("./Components/TechnicalProgram "));
const OrganizingComittee = lazy(() => import("./Components/OrganizingComittee "));
const Direct = lazy(() => import("./Components/Direct"));
const NotFound = lazy(() => import("./Components/NotFound"));

const App = () => {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Navbar />
      <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />}></Route>
          <Route path="/guidelines" element={<Guidelines />}></Route>
          <Route path="/speakers" element={<Speakers />}></Route>
          <Route path="/committee" element={<Committee />}></Route>
          <Route path="/call-for-papers" element={<CallForPapers />}></Route>
          <Route
            path="/committee/advisory-board"
            element={<AdvisoryBoard />}
          ></Route>

          <Route
            path="/committee/technical-program-committee"
            element={<TechnicalProgram />}
          ></Route>
          <Route
            path="/committee/organizing-committee"
            element={<OrganizingComittee />}
          ></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/review-policy" element={<REVIEW_POLICY />}></Route>
          <Route path="/plagiarism-policy" element={<PLAGIARISM_POLICY />}></Route>
          <Route path="/extra" element={<Direct />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};
export default App;
