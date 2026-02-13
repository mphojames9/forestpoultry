
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Offering from "./pages/Offering";
import Contact from "./pages/Contact";
import { Routes, Route, Navigate } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="offering" element={<Offering />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}
