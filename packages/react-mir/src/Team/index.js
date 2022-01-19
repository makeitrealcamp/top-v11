import React, { Component } from "react";
import TextInputWithFocusButton from '../TextInputWithFocusButton/';
import ContactList from '../ContactList/';
import MentorList from '../MentorList/';

class Team extends Component {
  state = {
    featured: '',
    mentors: [],
    students: []
  };

  componentDidMount() {
    this.getMentors();
    this.getStudents();
  }

  getMentors() {
    // const url = 'http://localhost:3000/mentors.json';
    const url = 'https://raw.githubusercontent.com/makeitrealcamp/top-v11/develop/packages/react-mir/public/mentors.json';
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({ mentors: data })
      })
      .catch(error => {
        console.log(error);
      });;
  }

  getStudents() {
    fetch('http://hp-api.herokuapp.com/api/characters/students')
      .then(response => response.json())
      .then(data => this.setState({ students: data }));
  }

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
    return (
      <main>
        <h1>Make it Real! Team</h1>
        <TextInputWithFocusButton />
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
          <ContactList contacts={this.state.students} title='MIR Students' />
        </section>
      </main>
    );
  }
}

export default Team;
