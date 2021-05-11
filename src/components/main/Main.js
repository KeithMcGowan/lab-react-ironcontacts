import React from "react";
import "./Main.css";
import Navbar from "../navbar/Navbar";
import Contacts from "../contacts/Contacts";
import data from "../../contacts.json";

class Main extends React.Component {
  constructor(props) {
    super(props);
    // console.log(data);

    const fiveRando = [];
    const theRest = [...data];
    let random1;
    for (let i = 0; i < 5; i++) {
      random1 = Math.floor(Math.random() * data.length);
      fiveRando.push(theRest.splice(random1, 1)[0]);
      // console.log(theRest.length);
    }

    this.state = {
      visibleContacts: fiveRando,
      invisibleContacts: theRest,
      sortedNameAsc: false,
      sortedPopAsc: false,
    };
  }

  addRando = () => {
    const visibleCopy = [...this.state.visibleContacts];
    const invisCopy = [...this.state.invisibleContacts];
    const rando = Math.floor(Math.random() * invisCopy.length);
    visibleCopy.push(invisCopy.splice(rando, 1)[0]);
    this.setState({
      visibleContacts: visibleCopy,
      invisibleContacts: invisCopy,
    });
  };

  sort = (sortType) => {
    const visibleCopy = [...this.state.visibleContacts];
    let asc;

    if (sortType === "name") {
      asc = !this.state.sortedNameAsc;
      this.setState({ sortedNameAsc: !this.state.sortedNameAsc });
    }
    if (sortType === "popularity") {
      asc = !this.state.sortedPopAsc;
      this.setState({ sortedPopAsc: !this.state.sortedPopAsc });
    }

    visibleCopy.sort((a, b) => {
      if (a[sortType] > b[sortType]) {
        return asc ? 1 : -1;
      } else if (b[sortType] > a[sortType]) {
        return asc ? -1 : 1;
      } else {
        return 0;
      }
    });

    this.setState({ visibleContacts: visibleCopy });
  };

  removeContact = (id) => {
    const visibleCopy = [...this.state.visibleContacts];
    let itemToDelete = visibleCopy.find((contact) => {
      return contact.id === id;
    });
    const index = visibleCopy.indexOf(itemToDelete);
    visibleCopy.splice(index, 1);
    this.setState({ visibleContacts: visibleCopy });
  };

  render() {
    return (
      <div className="main">
        <Navbar
          numberVisible={this.state.visibleContacts.length}
          totalContacts={
            this.state.invisibleContacts.length +
            this.state.visibleContacts.length
          }
        />
        <Contacts
          contacts={this.state.visibleContacts}
          sort={this.sort}
          addRando={this.addRando}
          removeContact={this.removeContact}
        />
      </div>
    );
  }
}

export default Main;
