import React from "react";

class ProfileCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDescription: false,
      showSocial: false,
      featured: ''
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

  featureProfile = (e) => {
    console.log(e);
    this.setState({
      featured: ''
    });
  }

  render() {
    const { name, photo, summary, description, social } = this.props.mentor;
    const renderContactButton = () => {
      if (social.length > 0) {
        return <button onClick={this.toggleSocial}>Contact</button>
      }
    }
    return (
      <div className="profile-card">
        <div className="image">
          <img src={ photo !== '' ? photo : 'https://via.placeholder.com/400' } alt="" />
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
          { renderContactButton() }
        </div>
        <button onClick={(e) => this.featureProfile(e) }>Feature this Mentor!</button>
      </div>
    );
  }
}

export default ProfileCard;
