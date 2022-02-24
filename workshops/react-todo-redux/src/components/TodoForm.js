const TodoForm = () => {

  const handleInputChange = (e) => {
    const name = e.target.value;
    console.log(name);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text'
        onChange={handleInputChange} />
    </form>
  )
}

export default TodoForm;