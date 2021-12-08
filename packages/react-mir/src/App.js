import React from 'react';
// Components
import Header from './Header';
import Footer from './Footer';

class Clock extends React.Component {
  render() {
    return <span>{this.props.currentTime}</span>;
  }
}

class ContactList extends React.Component {
  render() {
    // console.log('Props:', this.props);
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
      { name: 'Home', url: '/' },
      { name: 'Team', url: '/team' },
      { name: 'Features', url: '/features' },
      { name: 'Contact', url: '/contact' }
    ];

    const mentors = [
      { id: 1, name: 'Pablo Velasquez' },
      { id: 2, name: 'Sara Del Valle Restrepo' },
      { id: 3, name: 'Kelly Correa' },
    ];

    const students = [
      { id: 4, name: 'Maray Montes De Oca' },
      { id: 5, name: 'Giantory Espino' },
      { id: 6, name: 'Carlos Sucre' },
    ];

    return (
      <div className='App'>
        <Header routes={routes} />
        <main>
          <h1>Make it Real!</h1>
          <section className='clocks'>
            <Clock currentTime={ '8:14PM' } />
            <Clock currentTime={ '10:14PM' } />
            <Clock currentTime={ '05:14PM' } />
          </section>
          <section className='box'>
            <h2>Mentors</h2>
            <ContactList contacts={mentors} title={'Mentor List'} />
          </section>
          <section className='box'>
            <h2>Students</h2>
            <ContactList contacts={students} title={'Student List'} />
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;