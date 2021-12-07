# React

## Add React to a Website

Assuming we have a basic website like this:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="stylesheet" href="styles.css"/>
    <title>Make It Real - Home Page</title>
  </head>
  <body>
    <header>
      <span id="company-name">Make It Real</span>
      <span class="flex"></span>
      <nav id="navbar">
      </nav>
    </header>
    <main>
      <div id="root"></div>
      <section class="box">Section 1</section>
      <section class="box">Section 2</section>
    </main>
    <footer>
      <span>Footer</span>
    </footer>
    <script src="./script.js"></script>
</body>
  </body>
</html>
```

We need to add the corresponding `<script>` tags to the HTML:

```html
<script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
```

Then, we need to add a DOM container that we will use to hook React into the website:

```html
<div id="root"></div>
```

## React Elements

React uses JS objects to create React elements, we use these to describe what we want the page to look like and React will be in charge of generating the corresponding DOM nodes to get the desired result.

```
React.createElement( /* type */, /* props */, /* content */);
```

An initial element could look like this:

```js
const element = React.createElement('div', null, 'Hello World!');
```

## ReactDOM

We need to use `ReactDOM` to get the React element into the page. 

```js
ReactDOM.render(
  element, 
  document.getElementById('root')
);
```

We can also use properties to the element:

```js
const element = React.createElement('div', {
  className: 'welcome-message',
  alt: 'Welcome Message'
}, 'Hello World!');
```

And we can also compose React elements to have nested elements:

```js
const element = React.createElement('div', {
  className: 'welcome-message',
  alt: 'Welcome Message'
},
  React.createElement('strong', null, 'Hello World!')
);
```

Keep in mind that `.createElement()` returns one single element.

```js
const element = React.createElement(
  'ol',
  null,
  students.map((student) => (
    React.createElement('li', {
      key: student.name
    }, 
      React.createElement('a', {
        href: student.social[0].url
      }, student.name)
    )
  ))
);
```

These are not real DOM elements, instead, these are ibjects that describe real DOM nodes. Just until we use `render()`, the browser actually creates real DOM elements.

### Create React App

```sh
npm install -g create-react-app
```

You can check your global packages running:

```sh
npm list -g
```

## JSX

We can use `JSX` that let's write JS code that looks more like HTML, and improves the way we create React elements.

```jsx
const element = <h1>Hello, world</h1>
```

## Components

React elements are what components are "made of". Components represent the modularity and reusability of React. These are something like factories that produce instances of components and they should follow the single responsability principle and just do one thing.

A class component can be as simple as:

```js
class App extends React.Component {
  render() {
    return <h1>Hello, world</h1>
  }
}
```

Using `create-react-app` we get a stock component that looks more like this:

```js
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
```

And we can use this `App` component in the following way with `ReactDOM`:

```js
ReactDOM.render(
  <App />, 
  document.getElementById('root')
);
```




