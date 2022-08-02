import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivecyPolicy from "./pages/PrivecyPolicy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privecypolicy" element={<PrivecyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
