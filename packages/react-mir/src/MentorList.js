import React, { Component } from "react";
import ProfileCard from "./ProfileCard";

class MentorList extends Component {
  state = {
    featured: ''
  };

  render() {
    const { mentors } = this.props;
    return (
      <React.Fragment>
        {mentors.map((mentor) => (
          <ProfileCard key={mentor.id} mentor={mentor} />
        ))}
      </React.Fragment>
    );
  }
}

export default MentorList;
