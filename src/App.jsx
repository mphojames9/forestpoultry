
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Offering from "./pages/Offering";
import toast from "react-hot-toast";
import Contact from "./pages/Contact";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

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
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="offering" element={<Offering />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}