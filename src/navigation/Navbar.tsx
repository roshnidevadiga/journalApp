import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

export const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Journaling App
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">
            Dashboard
          </Button>
          <Button color="inherit" component={Link} to="/scratchpad">
            Scratchpad
          </Button>
          <Button color="inherit" component={Link} to="/goals">
            Goals
          </Button>
          <Button color="inherit" component={Link} to="/todo">
            To-Do List
          </Button>
          <Button color="inherit" component={Link} to="/reminders">
            Reminders
          </Button>
          <Button color="inherit" component={Link} to="/investments">
            Investments
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
