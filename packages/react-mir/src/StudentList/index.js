import React, { useContext } from 'react';
import ImageToggleOnScroll from '../ImageToggleOnScroll/';
import { UserContext } from '../App';
import './style.scss';

const StudentList = ({title, students}) => {
  const user = useContext(UserContext);

  return (
    <div className='student-list'>
      <h3>{title} seen by {user.username}</h3>
      {students.map((student, i) => (
          <div key={student.id || i} className="student-card">
            <div className="student-picture">
              <ImageToggleOnScroll 
                primaryImg={ student.photo ? student.photo : 'https://via.placeholder.com/400' }
                accentImg={ 'https://placekitten.com/400/400' }/>
            </div>
            <div className="student-info">
              <h2>{student.name} (#{student.id})</h2>
              <p>Description</p>
              { user.isAdmin && <button>Remove Student!</button> }
            </div>
          </div>
        ))}
    </div>
  );
}

export default StudentList;