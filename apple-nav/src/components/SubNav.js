import React from 'react';
import { NavLink } from 'react-router-dom';
import './all.css';

const SubNav = props => {
  return (
    <div className="sub-nav">
      {props.data.map(product => {
        return (
        <div className ='product'>
          <img src={product.img}/>
          <p>{product.name}</p>
        </div>
        )
      })}
    </div>
  );
};

export default SubNav;