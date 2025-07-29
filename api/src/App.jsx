import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";

import Home from "./pages/Home.jsx";
import KakaoMapPage from "./pages/KakaoMapPage.jsx";
import SocialLoginPage from "./pages/SocialLoginPage.jsx";
import PublicDataPage from "./pages/PublicDataPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kakao-map" element={<KakaoMapPage />} />
        <Route path="/social-login" element={<SocialLoginPage />} />
        <Route path="/public-data" element={<PublicDataPage />} />
      </Routes>
    </Router>
  );
}

export default App;
