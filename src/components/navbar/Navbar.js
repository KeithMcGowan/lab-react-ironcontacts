import React from "react";
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="nav">
        <p>
          Currently displaying {this.props.numberVisible} out of {this.props.totalContacts} total contacts.
        </p>
      </div>
    );
  }
}

export default Navbar;
