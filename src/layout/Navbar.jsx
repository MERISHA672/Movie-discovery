
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  const linkStyle = {
    color: "white",
    textDecoration: "none",
    padding: "10px 14px",
    borderRadius: "6px"
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#172554" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
        <Typography variant="h5" fontWeight="bold">
          🍿 Movie Discovery
        </Typography>

        <Box sx={{ display: "flex", gap: 1 }}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/search" style={linkStyle}>Search</Link>
          <Link to="/favorites" style={linkStyle}>Favorites</Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
