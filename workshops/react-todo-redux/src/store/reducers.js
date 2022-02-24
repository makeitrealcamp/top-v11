import { LOAD_TODOS, SHOW_LOADER, HIDE_LOADER } from './types';

const initialState = {
  todos: [],
  currentTodo: '',
  isLoading: false,
  message: ''
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TODOS:
      return {
        ...state,
        todos: action.payload
      }
    case SHOW_LOADER:
    case HIDE_LOADER:
      return {
        ...state,
        isLoading: action.payload
      }
    default:
      return state;
  }
}

export default reducer;