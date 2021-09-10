import React from 'react';
import './App.css';
import {HashRouter as Router,Switch, Route} from 'react-router-dom';
import Home from './pages';
import ContactPage from './pages/contact';
import AboutPage from './pages/aboutme.js';
import Skills from './pages/skills';
// import EducationPage from './pages/education';

function App() {
  return (
    
    <Router>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/contact" component={ContactPage} exact/>
      <Route path="/aboutme" component={AboutPage} exact />
      <Route path="/myeducation" component={() => {
    global.window && (global.window.location.href = 'https://drive.google.com/file/d/1NhC5xaddgVyYtz95SjyAXgeS7JAwyoGH/view?usp=sharing');
    return null;
    }}
/>    <Route path="/project1" component={() => {
    global.window && (global.window.location.href = 'https://github.com/Vedanshi-Shah/movie_recommendation_api');
    return null;
    }}
/>    
<Route path="/project2" component={() => {
    global.window && (global.window.location.href = 'https://github.com/Vedanshi-Shah/portfoliowebsite');
    return null;
    }}
/>    
      <Route path="/moreskills" component={Skills} exact />
    </Switch>
    </Router>
  );
}

export default App;
