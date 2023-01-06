import React from 'react';
import { NavLink } from 'react-router-dom';
// NavLink makes the link active after being selected
const Header = () => (
  <header>
    <span className="icn-logo"><i className="material-icons">code</i></span>
    <ul className="main-nav">
      <li><NavLink to="/" end>Home</NavLink></li>
      <li><NavLink to="about">About</NavLink></li>
      <li><NavLink to="teachers" className={({isActive})=> isActive ? "active-custom" : null }>Teachers</NavLink></li>
      <li><NavLink to="courses">Courses</NavLink></li>
    </ul>    
  </header>
);

export default Header;