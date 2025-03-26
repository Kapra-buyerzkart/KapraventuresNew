import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Team from "./pages/Team/Team";
import GalleryTitles from "./pages/GalleryTitles/GalleryTitles";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import GalleryPhotos from "./pages/GalleryPhotos/GalleryPhotos";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/gallery-events" element={<GalleryTitles />} />
            <Route path="/gallery-events/photos" element={<GalleryPhotos />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
