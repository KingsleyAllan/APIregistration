import React from "react";
import { Link } from "react-router-dom";

function App() {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop:"13%"
  };

  const linksContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    maxWidth: "800px",
    marginTop: "20px",
  };

  const centeredLinkStyle = {
    display: "flex",
    justifyContent: "center",
  };

  const secondLinksContainerStyle = {
    display: "grid",
    // gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
    marginTop: "20px",
  };

  const linkStyle = {
    textDecoration: "none",
    padding: "10px",
    color: "#333",
    border: "1px solid #333",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
  };

  const hoverLinkStyle = {
    backgroundColor: "#ddd",
  };

  return (
    <div style={containerStyle}>
            <Link to={"/"}>
      <h1>REGISTER USER INTERFACE</h1></Link>
      <div style={linksContainerStyle}>
        <Link to="/signup" style={linkStyle}>
          Signup
        </Link>
        <Link to="/addstudents" style={linkStyle}>
          Add Students 
        </Link>
        <Link to="/login" style={linkStyle}>
          Login
        </Link>
      </div>
      <div style={secondLinksContainerStyle}>
        <Link
          to="/studentstable"
          style={{ ...linkStyle, ...centeredLinkStyle }}
        >
          Students Table
        </Link>
      </div>
    </div>
  );
}

export default App;
