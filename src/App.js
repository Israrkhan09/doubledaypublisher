import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import { GlobalAuroraBackground } from "./Pages/GobalAurora";
import { CustomCursorProvider } from "./Pages/CursorContext";
import { CustomGlobalCursor } from "./Pages/CustomGlobalCursor";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import GhostWriting from "./Pages/GhostWriting";
import FictionWriting from "./Pages/FictionWriting";
import NonFiction from "./Pages/NonFiction";
import MemoirWriting from "./Pages/MemoirWriting";
import ScriptWriting from "./Pages/ScriptWriting";
import StoryWriting from "./Pages/StoryWriting";
import DisableScrollRestoration from "./Sections/ScrollToTop.jsx";
import ScrollToTop from "./Sections/ScrollToTop.jsx";


function App() {
    return (
        <CustomCursorProvider>
            <Router>

                <DisableScrollRestoration/>
                <ScrollToTop />

                <GlobalAuroraBackground>
                    <CustomGlobalCursor />

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about-us" element={<About />} />
                        <Route path="/contact-us" element={<Contact />} />

                        <Route path="/ghost-writing" element={<GhostWriting />} />
                        <Route path="/fiction-writing" element={<FictionWriting />} />
                        <Route path="/non-fiction-writing" element={<NonFiction />} />
                        <Route path="/memoir-writing" element={<MemoirWriting />} />
                        <Route path="/script-writing" element={<ScriptWriting />} />
                        <Route path="/story-writing" element={<StoryWriting />} />
                    </Routes>

                </GlobalAuroraBackground>

            </Router>
        </CustomCursorProvider>
    );
}

export default App;
