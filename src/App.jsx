import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function HomePage() {
  return (
    <>
      <Home />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="bg-[#171d32] min-h-screen w-full overflow-hidden">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Contact" element={<Contact />} />

      </Routes>
    </div>
  );
}

export default App;