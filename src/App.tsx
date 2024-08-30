// journalApp/src/App.tsx
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigation } from "./navigation/index";
import { Dashboard } from "./dashboard/Dashboard";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
