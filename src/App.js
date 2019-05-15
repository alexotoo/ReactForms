import React, { Component } from "react";
import AddMembers from "./AddMembers";
import MembersList from "./MembersList";

export class App extends Component {
  state = {
    members: [
      { name: "kofi", age: 22, location: "Kumasi", id: 1 },
      { name: "Efo", age: 28, location: "Takoradi", id: 2 },
      { name: "Ben", age: 44, location: "Koforidua", id: 3 }
    ]
  };
  addAmember = member => {
    member.id = Math.random();
    let members = [...this.state.members, member];
    this.setState({
      members: members
    });
  };
  deleteMember = id => {
    let members = this.state.members.filter(member => {
      return member.id !== id;
    });
    this.setState({
      members: members
    });
  };

  render() {
    return (
      <div>
        <MembersList
          members={this.state.members}
          deleteMember={this.deleteMember}
        />

        <AddMembers addAmember={this.addAmember} />
      </div>
    );
  }
}

export default App;
