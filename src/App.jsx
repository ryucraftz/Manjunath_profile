import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, Component } from "react";
import "./App.css";

import LandingPage from "./pages/LandingPage";
import ThankYou from "./pages/ThankYou";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-10 text-red-600 bg-white">
          <h1 className="text-2xl font-bold">Something went wrong.</h1>
          <details className="whitespace-pre-wrap">
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}

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
      <div className="bg-yellow-200 text-black p-4 font-bold text-center z-50 relative">
        DEBUG MODE: If you see this, React is working.
      </div>
      <LocationDebugger />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="*" element={<div className="p-10 text-xl font-bold">404 - No Route Matched for {window.location.hash}</div>} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
