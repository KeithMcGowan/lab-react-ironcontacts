import React from "react";
import "./ContactCard.css";

class ContactCard extends React.Component {
  render() {
    const { name, pictureUrl: pic, popularity, id } = this.props;

    return (
      <div className="card" onClick={() => this.props.delete(id)}>
        <h3>{name}</h3>
        <img src={pic} alt="Profile picture" />
        <p>Popularity: {popularity}</p>
      </div>
    );
  }
}

export default ContactCard;
