import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return(
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/contacts">Contacts</Link>
      </div>
    );
  }
}

export default Navbar;
