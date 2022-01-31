import React, { useState, useEffect } from "react";
import TextInputWithFocusButton from "../TextInputWithFocusButton/";
import StudentList from "../StudentList/";
import StudentForm from "../StudentForm/";
import MentorList from "../MentorList/";

const Team = () => {
  const [featured, setFeatured] = useState("");
  const [mentors, setMentors] = useState([]);
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getMentors();
    getStudents();
  }, []);

  const getMentors = () => {
    const url = "http://localhost:3000/mentors.json";
    // const url = 'https://raw.githubusercontent.com/makeitrealcamp/top-v11/develop/packages/react-mir/public/mentors.json';
    fetch(url)
      .then((response) => response.json())
      .then((mentors) => setMentors(mentors))
      .catch((error) => console.log(error));
  };

  const getStudents = () => {
    // fetch("http://hp-api.herokuapp.com/api/characters/students")
    fetch("http://localhost:3001/api/students")
      .then((response) => response.json())
      .then((students) => {
        console.log(students.data);
        setStudents(students.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  };

  const deleteProfile = (profile) => {
    setMentors(mentors.filter((p) => p.id !== profile.id));
  };

  return (
    <main>
      <h1>Make it Real! Team</h1>
      <TextInputWithFocusButton />
      <section className="box">
        <h2>Mentors</h2>
        <h3>Featured Mentor: {featured}</h3>
        <div className="mentors-container">
          <MentorList
            mentors={mentors}
            onFeatureProfile={(name) => setFeatured(name)}
            onDeleteProfile={(profile) => deleteProfile(profile)}
          />
        </div>
      </section>
      <section className="box">
        <h2>Students</h2>
        <StudentForm />
        {!isLoading &&
          (students.length > 0 ? (
            <StudentList students={students} title="MIR Students" />
          ) : (
            <h1>No Students registered</h1>
          ))}
        {isLoading &&
          (error ? (
            <h1>Error: Failed to fetch data from server</h1>
          ) : (
            <h1>Loading Data...</h1>
          ))}
      </section>
    </main>
  );
};

export default Team;
