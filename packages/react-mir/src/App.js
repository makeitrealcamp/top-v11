import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
// Components
import Header from './Header';
import Home from './Home';
import Team from './Team';
import Footer from './Footer';
// Dummy Data
import mentors from './mentors';

class App extends React.Component {
  state = {
    featured: '',
    mentors: mentors
  };

  featureProfile = (name) => {
    this.setState({
      featured: name
    });
  }

  deleteProfile = (profile) => {
    this.setState((prevState) => ({
      mentors: prevState.mentors.filter((p) => {
        return p.id !== profile.id;
      })
    }));
  }

  render() {
    const routes = [
      { name: 'Home', url: '/' },
      { name: 'Team', url: '/team' },
      { name: 'Features', url: '/features' },
      { name: 'Contact', url: '/contact' }
    ];

    const students = [
      { id: 4, name: 'Maray Montes De Oca' },
      { id: 5, name: 'Giantory Espino' },
      { id: 6, name: 'Carlos Sucre' },
    ];

    return (
      <div className='App'>
        <Header company='Make It Real' routes={routes} />
        <hr></hr>
        <h2>Links:</h2>
        <Link to='/'>Go Home</Link>
        <Link to='team'>Go Team</Link>
        <hr></hr>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='team' element={ <Team /> }/>
          <Route 
            path='*'
            element={
              <main>
                <h2>We weren't able to find what you were looking for</h2>
              </main>
            }/>
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
