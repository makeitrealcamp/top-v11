import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// Components
import Header from './Header/';
import Home from './Home/';
import Team from './Team/';
import Footer from './Footer/';
import './App.scss';

// createContext
export const RouteContext = React.createContext({
});

const App = () => {
  const [routes, setRoutes] = useState([{ name: 'Home', url: '/' },
  { name: 'Team', url: '/team' },
  { name: 'Features', url: '/features' },
  { name: 'Contact', url: '/contact' }]);

  return (
    <div className='App'>
      <RouteContext.Provider value={{ routes, setRoutes }}>
        <Header company='Make It Real'/>
      </RouteContext.Provider>
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
