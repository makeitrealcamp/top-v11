import React from "react";
import ImageToggleOnMouseOver from '../ImageToggleOnMouseOver/';
import { UserContext } from '../App';

class ProfileCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDescription: false,
      showSocial: false
    };
  }

  toggleDescription = () => {
    this.setState((prevState) => ({
      showDescription: !prevState.showDescription,
    }));
  };

  toggleSocial = () => {
    this.setState((prevState) => ({
      showSocial: !prevState.showSocial,
    }));
  };

  render() {
    const { name, photo, avatar, summary, description, social } = this.props.mentor;
    const { onFeatureProfile, onDeleteProfile } = this.props;
    const renderContactButton = () => {
      if (social.length > 0) {
        return <button onClick={this.toggleSocial}>Contact</button>
      }
    }
    return (
      <div className="profile-card">
        <div className="image">
          <ImageToggleOnMouseOver 
            primaryImg={photo !== '' ? photo : 'https://via.placeholder.com/400'}
            secondaryImg={avatar !== '' ? avatar : 'https://via.placeholder.com/400'}
            alt='' />
        </div>
        <div className="name">{name}</div>
        <p>{summary}</p>
        {this.state.showDescription && <p>{description}</p>}
        {this.state.showSocial &&
          social.map((social) => <a key={social.name} href={social.url}>{social.name}</a>)}
        <div className="btn-row">
          <button onClick={this.toggleDescription}>
            Read {this.state.showDescription ? "Less" : "More"}
          </button>
          {renderContactButton()}
        </div>
        <button onClick={() => onFeatureProfile(name)}>Feature this Mentor!</button>
        <UserContext.Consumer>
          { (value) => {
            return (
              <>
                { value.isAdmin ? <button onClick={() => onDeleteProfile(this.props.mentor)}>You are Fired!</button> : <p>Not admin</p> }
              </>)
          }}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default ProfileCard;
