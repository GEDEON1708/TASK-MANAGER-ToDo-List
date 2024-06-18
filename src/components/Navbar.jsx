/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <nav>
        <div className="tab">
          <NavLink to="/">Organização</NavLink>
        </div>
        <div className="tab active">
          <NavLink to="/">Tarefas</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
