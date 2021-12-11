import React from 'react';

class Clock extends React.Component {
  render() {
    return (
      <div className='clock'>
        <p>{this.props.currentTime}</p>
      </div>
    );
  }
}

export default Clock;