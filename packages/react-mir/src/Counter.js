import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    // initialize state
    this.state = {
      color: 'white',
      count: 0,
      name: this.props.name
    };
  }

  // update state incrementing the counter
  handleAddClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };

  // update state resetting the counter
  handleResetClick = () => {
    this.setState(() => ({
      count: 0
    }));
  };

  // update state reducing the counter
  handleSubClick = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1
    }));
  };

  render() {
    return (
      <div className='counter'>
        <h3 className='title'>
          counter: 
          <span style={ { color: this.state.color } }>{this.props.name}</span>
        </h3>
        <span id='value'>{this.state.count}</span>
        <div className='button-container'>
          <button className='btn' onClick={this.handleAddClick}>+</button>
          <button className='btn' id='reset' onClick={this.handleResetClick}>Reset</button>
          <button className='btn' onClick={this.handleSubClick}>-</button>
        </div>
      </div>
    );
  }
}

export default Counter;
