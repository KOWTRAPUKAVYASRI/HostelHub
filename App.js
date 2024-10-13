import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CityDropdown from './cityDropDown';
import CityPage from './cityPage';
import './App.css';
import SignIn from './signIn';
import LoginForm from './loginForm.js';
import Home from './Home';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<CityDropdown />} />
          <Route path="/city/:cityName" element={<CityPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
