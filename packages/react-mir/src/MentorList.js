import React, { Component } from "react";
import ProfileCard from "./ProfileCard";

class MentorList extends Component {
  render() {
    const { mentors, onFeatureProfile, onDeleteProfile } = this.props;
    return (
      <React.Fragment>
        {mentors.map((mentor) => (
          <ProfileCard 
            key={mentor.id}
            mentor={mentor} 
            onFeatureProfile={onFeatureProfile}
            onDeleteProfile={onDeleteProfile}/>
        ))}
      </React.Fragment>
    );
  }
}

export default MentorList;
