import React from 'react';
// Components
import Header from './Header';
import Clock from './Clock';
import Counter from './Counter';
import ContactList from './ContactList';
import Footer from './Footer';

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
            <Clock />
          </section>
          <section className='counters'>
            <Counter name={'1'} />
            <Counter name={'2'} />
            <Counter name={'3'} />
          </section>
          <section className='box'>
            <h2>Mentors</h2>
            <ContactList contacts={mentors} title={'MIR Mentors'} />
          </section>
          <section className='box'>
            <h2>Students</h2>
            <ContactList contacts={students} title={'MIR Students'} />
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
