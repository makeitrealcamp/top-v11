import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// Components
import Header from './Header/';
import Home from './Home/';
import Team from './Team/';
import Footer from './Footer/';
import './App.scss';

// createContext
export const CountContext = React.createContext({
  count: [{ name: 'Home', url: '/' },
  { name: 'Team', url: '/team' },
  { name: 'Features', url: '/features' },
  { name: 'Contact', url: '/contact' }],
  setCount: () => {}
});

const routes = [
  { name: 'Home', url: '/' },
  { name: 'Team', url: '/team' },
  { name: 'Features', url: '/features' },
  { name: 'Contact', url: '/contact' }
];

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <CountContext.Provider value={{ count, setCount }}>
        <Header company='Make It Real' routes={routes} />
      </CountContext.Provider>
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

export default App;
