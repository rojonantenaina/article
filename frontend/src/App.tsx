import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ArticlePage } from "./pages/article";
import { SigninPage } from "./pages/auth/signin";
import { SignupPage } from "./pages/auth/signup";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ArticlePage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
};

export default App;
