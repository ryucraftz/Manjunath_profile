import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Component } from "react";
import "./App.css";

import LandingPage from "./pages/LandingPage";
import ThankYou from "./pages/ThankYou";

class ErrorBoundary extends Component {

function App() {
  console.log("App.jsx: Rendering...");
  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="*" element={<div className="p-10 text-xl font-bold">404 - No Route Matched for {window.location.pathname}</div>} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
