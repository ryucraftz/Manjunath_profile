import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Component } from "react";
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

function App() {
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
