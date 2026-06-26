import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Offering from "./pages/Offering";
import Contact from "./pages/Contact";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import BackToTop from "./components/BackToTop";

export default function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            borderRadius: "12px",
            background: "#111827",
            color: "#fff",
            fontSize: "14px",
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/offering" element={<Offering />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* The ultimate catch-all to prevent dead blank screens */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <BackToTop />
      <Footer />
    </>
  );
}
