import React, { useState } from 'react';

const Group = () => {
  const [group, setGroup] = useState('');

  return (
    <>
      <h2>Group: { group }</h2>
      <button onClick={ () => setGroup('mentors')}>Mentors</button>
      <button onClick={ () => setGroup('students')}>Students</button>
    </>
  );
}

export default Group;