import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// var shortid = require('shortid');

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//     this.stopTime = this.stopTime.bind(this);
//   }
//
//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       this.props.time
//   )}
//
//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }
//
//   stopTime(){
//     this.componentWillUnmount();
//   }
//
//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//         <button onClick = {this.stopTime}>
//           Stop time!
//         </button>
//       </div>
//     );
//   }
// }
//
// <h1>"my name is " + mVar +  " nice to you"</h1>
// function App ()  {
//   return (
//     <div>
//       <Clock time = "1000"/>
//       <Clock time = "5000"/>
//     </div>
//   )
// }
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );


// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>;
// }
//
// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }
//
// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }
//
// function LoginButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Login
//     </button>
//   );
// }
//
// function LogoutButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Logout
//     </button>
//   );
// }
//
// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = {isLoggedIn: false};
//   }
//
//   handleLoginClick() {
//     this.setState({isLoggedIn: true});
//   }
//
//   handleLogoutClick() {
//     this.setState({isLoggedIn: false});
//   }
//
//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;
//
//     if (isLoggedIn) {
//       button = <LogoutButton onClick={this.handleLogoutClick} />;
//     } else {
//       button = <LoginButton onClick={this.handleLoginClick} />
//     }
//
//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//         {button}
//       </div>
//     );
//   }
// }
//




ReactDOM.render(
  <App />,
  document.getElementById('root')
);




registerServiceWorker();
