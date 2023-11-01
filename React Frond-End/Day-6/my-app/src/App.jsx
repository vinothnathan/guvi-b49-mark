import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Home';
import AllCourses from './AllCourses';
import FullStackDevelopment from './FullStackDevelopment';
import DataScience from './DataScience';
import CyberSecurity from './CyberSecurity';
import Career from './Career';
import Courses from './Courses';

function App() {
  return (
    <>
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/courses/All">All</Link></li>
            <li><Link to="/courses/FullStackDevelopment">Full Stack Development</Link></li>
            <li><Link to="/courses/DataScience">Data Science</Link></li>
            <li><Link to="/courses/CyberSecurity">Cyber Security</Link></li>
            <li><Link to="/courses/Career">Career</Link></li>
          </ul>
        </nav>
        <Routes>
        <Route path="/"exact component={Home} ></Route>
          <Route path="/All" component={AllCourses} ></Route>
          <Route path="/FullStackDevelopment" component={FullStackDevelopment}></Route>
          <Route path="/DataScience" component={DataScience} ></Route>
          <Route path="/CyberSecurity" component={CyberSecurity} ></Route>
          <Route path="/Career" component={Career} ></Route>
          <Route path="/courses/:name" Component={Courses}></Route>        
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;

