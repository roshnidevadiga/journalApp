//Create a nav bar file in tsx using material ui
import React from "react";
import { Link } from "react-router-dom";

export const Navigation: React.FC = () => {
  return (
    <div>
      <Link to="/">Home</Link>
    </div>
  );
};
