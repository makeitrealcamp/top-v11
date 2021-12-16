import React from "react";

class ProfileCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDescription: false,
      showSocial: false,
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
    const { name, photo, summary, description, social } = this.props.mentor;
    let hasPhoto = photo !== "";

    const renderImage = () => {
      if (hasPhoto) {
        return (
          <div className="image">
            <img src={photo} alt="" />
          </div>
        );
      } else {
        return <span>No photo available</span>;
      }
    };

    const renderContactButton = () => {
      if (social.length > 0) {
        return <button onClick={this.toggleSocial}>Contact</button>
      }
    }

    return (
      <div className="profile-card">
        {renderImage()}
        <div className="name">{name}</div>
        <p>{summary}</p>
        {this.state.showDescription && <p>{description}</p>}
        {this.state.showSocial &&
          social.map((social) => <a href={social.url}>{social.name}</a>)}
        <div className="btn-row">
          <button onClick={this.toggleDescription}>
            Read {this.state.showDescription ? "Less" : "More"}
          </button>
          { renderContactButton() }
        </div>
      </div>
    );
  }
}

export default ProfileCard;
