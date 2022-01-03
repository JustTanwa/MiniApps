import React, { useState } from 'react';
import './Navbar.css';


function Navbar() {
   const [click, setClick] = useState(false);

   const handleClick = () => setClick(!click);
   const closeMobileMenu = () => setClick(false);
   return (
      <>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a href="#" className="navbar-brand">BrandName</a>
            <div className="collapse navbar-collapse">
               <ul className="navbar-nav">
                  <li className='nav-item'>
                     <a href='#' className='nav-links nav-brand' onClick={closeMobileMenu}>
                        Home
                     </a>
                  </li>
                  <li className='nav-item'>
                     <a href='radomiser' className='nav-links' onClick={closeMobileMenu}>
                        Radomiser
                     </a>
                  </li>
                  <li className='nav-item'>
                     <a href='to-do-list' className='nav-links' onClick={closeMobileMenu}>
                        To do list
                     </a>
                  </li>
               </ul>
               <div className='menu icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
               </div>
            </div>
         </nav>
      </>
   )
}

export default Navbar;