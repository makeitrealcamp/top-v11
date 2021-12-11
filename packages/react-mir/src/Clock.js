import React from 'react';

class Clock extends React.Component {
  // initialize state, this means state is class field since it's not in constructor
  state = {
    date: new Date().toLocaleTimeString()
  };

  // Component is rendered (mounted) to the DOM for the first time
  componentDidMount() {
    this.intervalId = setInterval(
      () => this.tick(),
      1000
    )
  }

  // DOM produced by the component will be removed (unmounted)
  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  tick = () => {
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  };

  stopInterval = () => {
    clearInterval(this.intervalId)
  };

  restartInterval = () => {
    this.intervalId = setInterval(
      () => this.tick(),
      1000
    )
  };

  render() {
    return (
      <div className='clock'>
        <p>{ this.state.time }</p>
        <button className='btn' onClick={this.stopInterval}>STOP!</button>
        <button className='btn' onClick={this.restartInterval}>MOVE!</button>
      </div>
    );
  }
}

export default Clock;