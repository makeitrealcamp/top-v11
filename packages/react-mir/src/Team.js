import React, { Component } from "react";
import ContactList from './ContactList';
import MentorList from './MentorList';

class Team extends Component {
  render() {
    const { students } = this.props;
    return (
      <main>
        <h1>Make it Real! Team</h1>
        {/* <section className="box">
          <h2>Mentors</h2>
          <h3>Featured Mentor: {this.state.featured}</h3>
          <div className="mentors-container">
            <MentorList
              mentors={this.state.mentors}
              onFeatureProfile={this.featureProfile}
              onDeleteProfile={this.deleteProfile}
            />
          </div>
        </section>
        <section className="box">
          <h2>Students</h2>
          <ContactList contacts={students} title={"MIR Students"} />
        </section> */}
      </main>
    );
  }
}

export default Team;
