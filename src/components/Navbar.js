import React, { useState } from 'react';
import './Navbar.css';


function Navbar() {
   return (
      <>
         <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <a href="/" className="navbar-brand">MiniApps</a>
            <button className='navbar-toggler'>
               <span className='navbar-toggler-icon' data-toggle="collapse" data-target="#navBarMenu"></span>
            </button>
            <div className="collapse navbar-collapse" id="navBarMenu">
               <ul className="navbar-nav ml-auto">
                  <li className='nav-item'>
                     <a href='/' className='nav-link'>Home</a>
                  </li>
                  <li className='nav-item'>
                     <a href='#randomiser' className='nav-link'>Radomiser</a>
                  </li>
                  <li className='nav-item'>
                     <a href='#todolist' className='nav-link'>To do list</a>
                  </li>
               </ul>
            </div>
         </nav>
      </>
   )
}

export default Navbar;