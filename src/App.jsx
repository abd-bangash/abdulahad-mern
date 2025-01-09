import About from "./About";
import Body from "./Body";
import Nav from "./Nav";
import { Routes, Route } from "react-router-dom";
import Projects from "./Projects";
import OpenSource from "./OpenSource";
import Contact from "./Contact";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/opensource" element={<OpenSource />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
