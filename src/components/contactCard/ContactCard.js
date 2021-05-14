import React from "react";
import "./ContactCard.css";
import { Link } from "react-router-dom";

class ContactCard extends React.Component {
  render() {
    const { name, pictureUrl: pic, popularity, id } = this.props;

    let bgColor;
    let popularityColor = Number(popularity);
    if (popularityColor >= 20) {
      bgColor = "#FFD700";
    } else if (popularityColor < 20 && popularityColor >= 10) {
      bgColor = "#C0C0C0";
    } else {
      bgColor = "#cd7f32";
    }

    return (
      <div className="card" style={{ backgroundColor: bgColor }}>
        <Link to={`/contacts/${id}`}>
          <h3>
            <b>{name}</b>
          </h3>
          <img src={pic} alt="Profile picture" />
          <p>
            <b>Popularity: {popularity}</b>
          </p>
        </Link>
        <button
          onClick={() => {
            this.props.delete(id);
          }}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default ContactCard;
