import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";

import LandingPage from "./pages/LandingPage";
import ThankYou from "./pages/ThankYou";

function LocationDebugger() {
  const location = useLocation();
  useEffect(() => {
    console.log("Current Path:", location.pathname);
  }, [location]);
  return null;
}

function App() {
  console.log("App.jsx: Rendering...");
  return (
    <Router>
      <LocationDebugger />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="*" element={<div className="p-10 text-xl font-bold">404 - No Route Matched for {window.location.pathname}</div>} />
      </Routes>
    </Router>
  );
}

export default App;
