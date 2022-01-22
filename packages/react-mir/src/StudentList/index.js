import React from 'react';
import ImageToggleOnScroll from '../ImageToggleOnScroll/';
import './style.scss';

class StudentList extends React.Component {
  render() {
    const students = this.props.students;
    return (
      <div className='student-list'>
        <h3>{this.props.title}</h3>
        {students.map((student, i) => (
            <div key={student.id || i} className="student-card">
              <div className="student-picture">
                <ImageToggleOnScroll primaryImg={ student.photo ? student.photo : 'https://via.placeholder.com/400' }
                                    accentImg={ 'https://placekitten.com/400/400' }/>
              </div>
              <div className="student-info">
                <h2>{student.name} (#{student.id})</h2>
                <p>Description</p>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

export default StudentList;