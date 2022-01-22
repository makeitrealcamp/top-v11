import React, { useState, useEffect } from 'react';
import TextInputWithFocusButton from '../TextInputWithFocusButton/';
import StudentList from '../StudentList/';
import MentorList from '../MentorList/';

const Team = () => {
  const [featured, setFeatured] = useState('');
  const [mentors, setMentors] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getMentors();
    getStudents();
  }, []) 

  const getMentors = () => {
    const url = 'http://localhost:3000/mentors.json';
    // const url = 'https://raw.githubusercontent.com/makeitrealcamp/top-v11/develop/packages/react-mir/public/mentors.json';
    fetch(url)
      .then(response => response.json())
      .then(mentors => setMentors(mentors))
      .catch(error => console.log(error));
  }

  const getStudents = () => {
    fetch('http://hp-api.herokuapp.com/api/characters/students')
      .then(response => response.json())
      .then(students => setStudents(students));
  }

  const deleteProfile = (profile) => {
    setMentors(mentors.filter(p => p.id !== profile.id));
  }
  
  return (
    <main>
      <h1>Make it Real! Team</h1>
      <TextInputWithFocusButton />
      <section className='box'>
        <h2>Mentors</h2>
        <h3>Featured Mentor: {featured}</h3>
        <div className='mentors-container'>
          <MentorList
            mentors={mentors}
            onFeatureProfile={(name) => setFeatured(name)}
            onDeleteProfile={(profile) => deleteProfile(profile)}
          />
        </div>
      </section>
      <section className='box'>
        <h2>Students</h2>
        <StudentList students={students} title='MIR Students' />
      </section>
    </main>
  );
}

export default Team;
