import React from "react";
import "./Infobar.css";

class Infobar extends React.Component {
  render() {
    return(
      <div className="infobar">
        <p>
          Currently displaying {this.props.numberVisible} out of {this.props.totalContacts} total contacts.
        </p>
      </div>
    );
  }
}

export default Infobar;
