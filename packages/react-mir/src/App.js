import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
// Components
import Login from './Login/';
import Header from './Header/';
import Home from './Home/';
import Team from './Team/';
import Footer from './Footer/';
import './App.scss';

export const UserContext = React.createContext(undefined);
export const RouteContext = React.createContext({});
export const ThemeContext = React.createContext(undefined);

const mockUser = {
  isAdmin: false
}

const initRoutes = [
  { name: 'Home', url: '/' },
  { name: 'Team', url: '/team' },
  { name: 'Features', url: '/features' },
  { name: 'Contact', url: '/contact' }
];

export const ThemeColors = {
  light: {
    backgroundColor: '#cccccc',
    color: '#222222'
  },
  dark: {
    backgroundColor: '#272727',
    color: '#f6f4e6'
  }
};

const App = () => {
  const [user, setUser] = useState(mockUser);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', user.token);
  }, [user]); 

  return (
    <div className='App'>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <UserContext.Provider value={{user, setUser}}>
          <RouteContext.Provider value={initRoutes}>
            <Header company='Make It Real' />
          </RouteContext.Provider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='login' element={<Login />} />
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
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
