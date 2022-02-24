import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadTodos, showLoader, hideLoader } from '../store/actions';
import Loader from './Loader';
import loading from '../loading.gif'

const list = [
  { name: 'learn Js'},
  { name: 'learn React'},
  { name: 'learn Redux'},
  { name: 'learn React Redux'},
];

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const isLoading = useSelector(state => state.isLoading);

  // toggle

  // remove

  useEffect(() => {
    // simulate http request GET /api/todos
    // show loader
    dispatch(showLoader());
    dispatch(loadTodos(list));
    // hide loader
    dispatch(hideLoader());
  }, []);

  return (
    <div className="Todo-List">
      {/* <Loader isLoading={isLoading} /> */}
      { isLoading ? <img src={loading} /> : null }
      <ul>
        {todos.map(todo => (
          <li>{ todo.name }</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;