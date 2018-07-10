import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
    this.stopTime = this.stopTime.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      this.props.time
  )}

  stopTime() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <button onClick = {this.stopTime}>
          Stop time!
        </button>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Clock time = "1000" />
      <Clock time = "5000" />
      <Clock time = "10000" />
    </div>
  );
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

registerServiceWorker();
