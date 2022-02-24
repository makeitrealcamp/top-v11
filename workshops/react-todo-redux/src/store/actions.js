// creators
export const loadTodos = (todos) => ({ type: 'LOAD_TODOS', payload: todos});
export const addTodo = (todo) => ({ type: 'ADD_TODO', payload: todo });
export const showLoader = () => ({ type: 'SHOW_LOADER', payload: true });
export const hideLoader = () => ({ type: 'HIDE_LOADER', payload: false });