import React from 'react';

class ProfileCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDescription: false
    };
  }

  toggleDescription = () => {
    this.setState((prevState) => ({
      showDescription: !prevState.showDescription
    }));
  }

  render() {
    const { name, photo , summary, description } = this.props.mentor;
    let hasPhoto = photo !== '';

    const renderImage = () => {
      if (hasPhoto) {
        return (<div className='image'>
          <img src={photo} alt='' />
        </div>)
      } else {
        return (<span>No photo available</span>)
      }
    }

    return (
      <div className='profile-card'>
        { renderImage() }
        <div className='name'>{ name }</div>
        <p>{ summary }</p>
        { this.state.showDescription && <p>{ description }</p> }
        <div className='btn-row'>
          <button onClick={this.toggleDescription}>
            Read { this.state.showDescription ? 'Less' : 'More' }
          </button>
          <button>Contact</button>
        </div>
      </div>
    );
  }
}

export default ProfileCard;

