import React from "react";

class Clock extends React.Component {
  render() {
    return <p>{this.props.currentTime}</p>;
  }
}

class Navbar extends React.Component {
  render() {
    const routes = this.props.routes;
    return (
      <nav className="navbar">
        <ul>
          { routes.map((route) => (
            <li key={route.id}>
              <a href={route.url}>
                {route.name}
              </a>
            </li>
          )) }
        </ul>
      </nav>
    );
  }
}

class ContactList extends React.Component {
  render() {
    // console.log("Props:", this.props);
    const contacts = this.props.contacts;

    return (
      <div>
        <h3>{this.props.title}</h3>
        <ol>
          {contacts.map((contact) => (
            <li key={contact.id}>
              {contact.name} (#{contact.id})
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    const routes = [
      { id: 1, name: 'Home', url: '/' },
      { id: 2, name: 'Team', url: '/team' },
      { id: 3, name: 'Features', url: '/features' },
      { id: 4, name: 'Contact', url: '/contact' }
    ];

    const mentors = [
      { id: 1, name: "Pablo Velasquez" },
      { id: 2, name: "Sara Del Valle Restrepo" },
      { id: 3, name: "Kelly Correa" },
    ];

    const students = [
      { id: 4, name: "Maray Montes De Oca" },
      { id: 5, name: "Giantory Espino" },
      { id: 6, name: "Carlos Sucre" },
    ];

    return (
      <div>
        <header>
          <span id="company-name">Make It Real</span>
          <span className="flex"></span>
          <Navbar routes={routes} />
        </header>
        <main>
          <h1>Make it Real!</h1>
          <Clock currentTime={ '8:14PM' } />
          <Clock currentTime={ '10:14PM' } />
          <Clock currentTime={ '05:14PM' } />
          <section className="box">
            <h2>Mentors</h2>
            <ContactList contacts={mentors} title={"Mentor List"} />
          </section>
          <section className="box">
            <h2>Students</h2>
            <ContactList contacts={students} title={"Student List"} />
          </section>
        </main>
        <footer>
          <span>Footer</span>
        </footer>
      </div>
    );
  }
}

export default App;