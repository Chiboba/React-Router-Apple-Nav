import React from 'react';
import { NavLink } from 'react-router-dom'
import './all.css';

const NavWrapper = props => {
  return (
    <div className="nav-wrapper">
      
    
      <NavLink to='/ipad' activeClassName="selected">
          <span>iPad</span>
      </NavLink>
      <NavLink to='/iphone' activeClassName="selected">
          <span>iPhone</span>
      </NavLink>
      <NavLink to='/watch' activeClassName="selected">
          <span>Watch</span>
      </NavLink>
      <NavLink to='/tv' activeClassName="selected">
          <span>TV</span>
      </NavLink>
      <NavLink to='/music' activeClassName="selected">
          <span>Music</span>
      </NavLink>
      <NavLink to='/support' activeClassName="selected">
          <span>Support</span>
      </NavLink>
    </div>
  );
};

export default NavWrapper;