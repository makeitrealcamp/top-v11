// Library Redux
// Factory pattern (store) - Redux MIR
// function createStore (reducer) {
//   // 1. state
//   // 2. getting the state
//   // 3. listening for changes to the state
//   // 4. updating the state

//   let state; // []
//   let listeners = [];
  
//   // const getState = () => state;
//   const getState = () => {
//     return state;
//   }

//   const subscribe = (listener) => {
//     listeners.push(listener);
//     return () => {
//       listeners = listeners.filter((l) => l !== listener)
//     }
//   }

//   const dispatch = (action) => {
//     state = reducer(state, action);
//     listeners.forEach(listener => listener());
//   }

//   return {
//     getState,
//     subscribe,
//     dispatch,
//   };
// }

// ------------

// APP: To Do list: add todo, remove todo, update todo... todos
// Actions

// Types
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const ADD_EVENT = 'ADD_EVENT';
const REMOVE_EVENT = 'REMOVE_EVENT';

// Action creators
const addTodoAction = todo => ({
  type: ADD_TODO,
  todo // payload
})

const toggleTodoAction = id => ({
  type: TOGGLE_TODO,
  id  // payload
})

const removeTodoAction = id => ({
  type: REMOVE_TODO,
  id  // payload
})

const addEventAction = event => ({
  type: ADD_EVENT,
  event  // payload
})

const removeEventAction = id => ({
  type: REMOVE_EVENT,
  id  // payload
})

// reducer 1  
function todos (state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat([action.todo]);
    case TOGGLE_TODO:
      return state.map((todo) => todo.id !== action.id ? 
        todo : Object.assign({}, todo, { complete: !todo.complete }))
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}

// reducer 2
function events (state = [], action) {
  switch (action.type) {
    case ADD_EVENT:
      return state.concat([action.event]);
    case REMOVE_EVENT:
      return state.filter((event) => event.id !== action.id);
    default:
      return state;
  }
}

// function combinedReducers (state = {}, action) {
//   return {
//     todos: todos(state.todos, action),
//     events: events(state.events, action)
//   }
// }

// const store = createStore(combinedReducers);
// const store = Redux.createStore(combinedReducers);
const store = Redux.createStore(Redux.combineReducers({
  todos,
  events
}))

function microId () {
  const now = new Date();
  return Math.random().toString(36).substring(2) + now.getMilliseconds();
}


const unsubscribe = store.subscribe(() => {
  console.log('The new state is:', store.getState());
  const { todos, events } = store.getState();
  document.getElementById('todos').innerHTML = '';
  todos.forEach(addTodoListItem);
  document.getElementById('events').innerHTML = '';
  events.forEach(addEventListItem);
});

// store.dispatch(addTodoAction({
//   id: 0,
//   name: 'learn redux',
//   complete: false
// }))
// store.dispatch(toggleTodoAction(0));
// store.dispatch(removeTodoAction(0));
// store.dispatch(addEventAction({
//   id: 0,
//   name: 'dentist appointment'
// }));
// store.dispatch(removeEventAction(0));

function addTodo () {
  const input = document.getElementById('todo');
  const name = input.value;
  input.value = '';
  store.dispatch(addTodoAction({
    id: microId(),
    name,
    complete: false
  }))
}

function addTodoListItem (todo) {
  const row = document.createElement('li');
  const text = document.createTextNode(todo.name);
  row.appendChild(text);
  const btn = document.createElement('button');
  btn.innerHTML = 'rm';
  btn.addEventListener('click', () => {
    store.dispatch(removeTodoAction(todo.id));
  });
  row.appendChild(btn);
  row.style.textDecoration = todo.complete ? 'line-through' : 'none';
  row.addEventListener('click', () => {
    store.dispatch(toggleTodoAction(todo.id));
  })
  document.getElementById('todos').appendChild(row);
}

document.getElementById('todoBtn').addEventListener('click', addTodo);

function addEvent () {
  const input = document.getElementById('event');
  const name = input.value;
  input.value = '';
  store.dispatch(addEventAction({
    id: microId(),
    name
  }))
}

function addEventListItem (todo) {
  const row = document.createElement('li');
  const text = document.createTextNode(todo.name);
  row.appendChild(text);
  const btn = document.createElement('button');
  btn.innerHTML = 'rm';
  btn.addEventListener('click', () => {
    store.dispatch(removeEventAction(todo.id));
  });
  row.appendChild(btn);
  document.getElementById('events').appendChild(row);
}

document.getElementById('eventBtn').addEventListener('click', addEvent);


// unsubscribe();

