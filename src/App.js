import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
// import Services from "./pages/Services/Services";
// import About from "./pages/About/About";
// import Contact from "./pages/Contact/Contact";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Team from "./pages/Team/Team";
import Gallery from "./pages/Gallery/Gallery";
// import KapraProvider, { KapraContext } from "./context/KapraContext";

const App = () => {

  // const [loading, setLoading] = useState(true);
  // const { loading } = useContext(KapraContext);

  return (
    <Router>
      {/* {console.log('llllll', loading)} */}
      <Header />
      {/* {
        loading ? (<Loader />) : (
          <>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
          </>
        )
      } */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </Router >
  );
};

export default App;
