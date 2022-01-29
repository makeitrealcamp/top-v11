import { useState} from 'react'

const StudentForm = (props) => {
  const [student, setStudent] = useState({});

  const submit = (e) => {
    e.preventDefault();
    console.log(student);
    fetch('http://localhost:3001/api/students', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student)
    })
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(response => console.log(response))
  }
  
  return (
    <form onSubmit={submit}>
      <input 
        type='text'
        placeholder='Input your name'
        name='student[name]'
        value={student.name}
        onChange={e => setStudent({ ...student, name: e.target.value }) }
        />
      <input 
        type='text'
        name='student[surname]'
        placeholder='Input your surname'
        value={student.surname}
        onChange={e => setStudent({ ...student, surname: e.target.value }) }
        />
      <input 
        type='text'
        name='student[email]'
        placeholder='Input your email'
        value={student.email}
        onChange={e => setStudent({ ...student, email: e.target.value }) }
        />
      <input 
        type='text'
        name='student[description]'
        placeholder='Input a description'
        value={student.description}
        onChange={e => setStudent({ ...student, description: e.target.value }) }
        />
      <input 
        type='text'
        name='student[photo]'
        placeholder='Input your github photo url'
        value={student.photo}
        onChange={e => setStudent({ ...student, photo: e.target.value }) }
        />
      <input type='submit' name='Submit'/>
    </form>
  )

}

export default StudentForm;