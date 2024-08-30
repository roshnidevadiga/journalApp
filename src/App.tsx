// journalApp/src/App.tsx
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./navigation/Navbar";
import { Dashboard } from "./dashboard/Dashboard";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
