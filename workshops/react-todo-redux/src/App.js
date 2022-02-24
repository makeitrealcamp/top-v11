import logo from './logo.svg';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Todo List
      </header>
      <div className="Todo-App">
        <TodoForm></TodoForm>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
