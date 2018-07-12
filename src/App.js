import React, { Component } from 'react';
import './App.css';

var shortid = require('shortid');

function User(props) {
  return(
  <li className="item">
   Name: {props.name}
   <button onClick={props.voteUp}>Vote UP</button>
   <button onClick={props.voteDown}>Vote DOWN</button>
    <button onClick={props.delEvent}>Delete</button>
  </li>
  )
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {name: 'Ryan',  key: shortid.generate()},
        {name: 'Taylor', key: shortid.generate()},
        {name: 'Andy', key: shortid.generate()},
        {name: 'Dru', key: shortid.generate()},
        {name: 'Robert', key: shortid.generate()}
      ],
      newName: ''
    }
  }
  updateName(e) {
    this.setState({newName: e.target.value});
  }

  addUser(e) {
    let newUser = { name: this.state.newName, key: shortid.generate()}
    let userList = this.state.users;;
    userList.push(newUser);
    this.setState({users: userList})
    this.setState({newName: ''})
  }

  vote (key, message, e) {
    let newUsers = this.state.users;
    let placeholder = newUsers.findIndex((user) => {
      return user.key === key;
    })
    if (message === true && placeholder === 0) {
      alert(this.state.users[placeholder].name + ' is already the best!')
    } else if (message === false && placeholder === newUsers.length -1) {
      alert(this.state.users[placeholder].name + ' is already the biggest loser!')
    }
     else {
       let plusMinus = placeholder;
       console.log(plusMinus);
       if(message === true) {
         console.log(true);
         plusMinus--;

       }
       else if(message === false){
         console.log(false);
         plusMinus++;

       }
    console.log(plusMinus);
    let movedItem = newUsers.splice(placeholder, 1)[0];
    newUsers.splice(plusMinus, 0, movedItem);
    console.log(newUsers);
    this.setState({users: newUsers});
  }
}



  // voteDown (key, e) {
  //   let newUsers = this.state.users;
  //   let placeholder = newUsers.findIndex((user) => {
  //     return user.key === key;
  //   })
  //   if(placeholder !== newUsers.length -1) {
  //   let movedItem = newUsers.splice(placeholder, 1)[0];
  //   newUsers.splice(placeholder += 1, 0, movedItem);
  //   this.setState({users: newUsers});
  // } else {
  //   alert(this.state.users[placeholder].name + ' is already the biggest loser!')
  // }
  // }

  deleteUser(index, key, e) {
    let newUsers = this.state.users;
    newUsers.splice(index, 1);
    this.setState({users: newUsers})
  }

  render() {
    return (
      <div className="mainDiv">
        <ul>
          {
            this.state.users.map((user, index) => {
              return <User key={user.key} name = {user.name} voteUp={this.vote.bind(this, user.key, true)} voteDown={this.vote.bind(this, user.key, false)}  delEvent= {this.deleteUser.bind(this, index, user.key)}/>
            })
          }

        </ul>
        <div className="item">
          <label>Add new user:  </label>
          <input onChange={this.updateName.bind(this)} value={this.state.newName}></input>
          <button onClick={this.addUser.bind(this)}>Add user</button>
        </div>
      </div>
    );
  }
}

export default App;
