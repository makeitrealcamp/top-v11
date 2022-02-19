# Redux
state management
predictable state (func par. => pure function)

Rules:
* only an event can change the state in the store
* the functions that returns the new state must be a pure function

Store
Action
Reducer
Dispatch

---

Pure functions

---

State Tree        

function (state, action) => state

{ Action ADD_TODO }, 
{ Action }, 
{ Action ADD_TODO },
{ Action}, 
{ Action}  

type:
ADD_TODO
REMOVE_TODO
TOGGLE_TODO

## Action

```js
{
  type: 'ADD_TODO',
  todo: {
    id: 0,
    name: 'learn redux',
    complete: false
  }
}

const addTodo = todo => ({
  type: 'ADD_TODO',
  todo
})
```

```js
{
  type: 'TOGGLE_TODO',
  id: 0
}

const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id: id
})
```

```js
{
  type: 'REMOVE_TODO',
  id: 0
}
```

## Events

```js
{
  type: 'ADD_EVENT',
  event: {
    id: 0,
    name: 'dentist appointment'
  }
}
```

```js
{
  type: 'REMOVE_EVENT',
  id: 0
}
```

---

UI + State => Data

Components:
  Data

A B C D E

The Store:
* state tree
* getting the state
* listening for changes to the state
* updating the state

```js
[
  {...},
  {...},
  {...}
]
```

```js
{
  todos: [
    {...},
    {...},
    {...}
  ],
  events: [
    {...},
    {...},
    {...},
    {...}
  ],
  contacts: []
}
```