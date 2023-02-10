import { BrowserRouter, Route, Routes } from "react-router-dom";

import { NavBar } from "./NavBar";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { TypingPage } from "./pages/Typing";
import { ComboPage } from "./pages/ComboPage";

export function App() {
  return (
  
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element = {<HomePage />} />
          <Route path="/about" element = {<AboutPage />} />
          <Route path="/contact" element = {<ContactPage />} />
          <Route path="/typing" element = {<TypingPage />} />
          <Route path="/combo" element = {<ComboPage />} />
        </Routes>
      </BrowserRouter>
  
  );
}
