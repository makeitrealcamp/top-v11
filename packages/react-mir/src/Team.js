import React, { Component } from "react";
import ContactList from './ContactList';
import MentorList from './MentorList';
// Dummy Data
import mentors from './mentors';

class Team extends Component {
  state = {
    featured: '',
    mentors: mentors
  };

  featureProfile = (name) => {
    this.setState({
      featured: name
    });
  }

  deleteProfile = (profile) => {
    this.setState((prevState) => ({
      mentors: prevState.mentors.filter((p) => {
        return p.id !== profile.id;
      })
    }));
  }

  render() {
    const students = [
      { id: 4, name: 'Maray Montes De Oca' },
      { id: 5, name: 'Giantory Espino' },
      { id: 6, name: 'Carlos Sucre' },
    ];

    return (
      <main>
        <h1>Make it Real! Team</h1>
        <section className="box">
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
          <ContactList contacts={students} title='MIR Students' />
        </section>
      </main>
    );
  }
}

export default Team;
