import React from "react";
import allTheContacts from "../../contacts.json";

class Details extends React.Component {
  state = {
    name: "",
    popularity: 0,
    image: "",
  };

  componentDidMount() {
    // console.log(this.props);
    const id = this.props.match.params.id;
    // console.log("id is ", id);
    const theContact = allTheContacts.find((contact) => {
      return contact.id === id;
    });
    // console.log("contact is ", theContact);
    const { name, pictureUrl: image, popularity } = theContact;
    this.setState({
      name: name,
      image: image,
      popularity: popularity,
    });
  }

  render() {
    return (
      <div>
        <p>Details Component</p>

        <h1>Props dot blah equals {this.props.blah}</h1>

        <h2>Name: {this.state.name}</h2>
        <h6>Popularity: {this.state.popularity}</h6>
        <img src={this.state.image} alt="Celebrity's pic." />
      </div>
    );
  }
}

export default Details;
