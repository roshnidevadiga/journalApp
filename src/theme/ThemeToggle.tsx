// src/components/ThemeToggle.tsx
import React from "react";
import { Switch, FormControlLabel } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface ThemeToggleProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({
  toggleTheme,
  isDarkMode,
}) => {
  return (
    <FormControlLabel
      control={<Switch checked={isDarkMode} onChange={toggleTheme} />}
      label={isDarkMode ? "Dark Mode" : "Light Mode"}
    />
  );
};

export default ThemeToggle;
