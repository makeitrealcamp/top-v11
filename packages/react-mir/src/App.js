import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// Components
import Header from './Header/';
import Home from './Home/';
import Team from './Team/';
import Footer from './Footer/';
import './App.scss';

export const UserContext = React.createContext(undefined);
export const RouteContext = React.createContext({});

const initUser = {
  username: 'John Doe',
  isAdmin: false
}

const initRoutes = [
  { name: 'Home', url: '/' },
  { name: 'Team', url: '/team' },
  { name: 'Features', url: '/features' },
  { name: 'Contact', url: '/contact' }
];

const App = () => {
  const [userDetails, setUserDetails] = useState(initUser);

  return (
    <div className='App'>
      <UserContext.Provider value={userDetails}>
        <RouteContext.Provider value={initRoutes}>
          <Header company='Make It Real' />
        </RouteContext.Provider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='team' element={<Team />} />
          <Route
            path='*'
            element={
              <main>
                <h2>We weren't able to find what you were looking for</h2>
              </main>
            } />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
