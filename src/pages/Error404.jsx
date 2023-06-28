import React from 'react';
import './Error404.css';
import { NavLink } from 'react-router-dom';

function Error404() {
  return (
    <main className='main-404'>
      <div className='background-img'>
        <img
          src="https://images.unsplash.com/photo-1532634740-6837b2a21d39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          alt=""
          className='bg-image'
        />
      </div>
      <div className='text-404'>
        <p>404</p>
        <p>Page not found</p>
        <NavLink to="/home">
        <button className="boton-success">Continue shopping</button>
        </NavLink>
      </div>
    </main>
  );
}

export default Error404;
