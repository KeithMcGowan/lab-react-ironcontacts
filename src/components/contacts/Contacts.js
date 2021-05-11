import React from "react";
import data from '../../contacts.json';
import "./Contacts.css";
import ContactCard from "../contactCard/ContactCard";

class Contacts extends React.Component {
  render() {
    return (
      <>
        <div className="btnDiv">
          <button onClick={this.props.addRando}>Add</button>
          <button onClick={() => {this.props.sort("name")}}>Sort by Name</button>
          <button onClick={() => {this.props.sort("popularity")}}>Sort by Popularity</button>
        </div>

        <div className="container">
          {this.props.contacts.map(contact => {
            return (
              <ContactCard
                {...contact}
                key={contact.id}
                delete={this.props.removeContact}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default Contacts;
