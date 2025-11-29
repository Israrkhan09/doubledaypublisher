import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import "./App.css";

// --- Global Components ---
import { GlobalAuroraBackground } from "./Pages/GobalAurora";
import { CustomCursorProvider } from "./Pages/CursorContext";
import { CustomGlobalCursor } from "./Pages/CustomGlobalCursor";

// --- Page Components ---
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import GhostWriting from "./Pages/GhostWriting";
import FictionWriting from "./Pages/FictionWriting";
import NonFiction from "./Pages/NonFiction";
import MemoirWriting from "./Pages/MemoirWriting";
import ScriptWriting from "./Pages/ScriptWriting";
import StoryWriting from "./Pages/StoryWriting";

// Scroll to top when route changes
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <CustomCursorProvider>
        <GlobalAuroraBackground>
          <CustomGlobalCursor />
          <ScrollToTop />
          <Routes>
            {/* Note: Paths are now relative because of basename */}
            <Route path="" element={<Home />} />
            <Route path="about-us" element={<About />} />
            <Route path="contact-us" element={<Contact />} />

            {/* <Route path="ghost-writing" element={<GhostWriting />} /> */}
            {/* <Route path="ghost-writing" element={<GhostWriting/>} /> */}
            <Route path="ghost-writing" element={<GhostWriting/>}/>
            <Route path="fiction-writing" element={<FictionWriting />} />
            <Route path="non-fiction-writing" element={<NonFiction />} />
            <Route path="memoir-writing" element={<MemoirWriting />} />
            <Route path="script-writing" element={<ScriptWriting />} />
            <Route path="story-writing" element={<StoryWriting />} />
          </Routes>
        </GlobalAuroraBackground>
      </CustomCursorProvider>
    </Router>
  );
}

export default App;
