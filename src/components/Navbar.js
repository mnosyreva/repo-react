import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar = () => (
    <nav className="navbar navbar-dark navbar-expand-lg bg-info">
        <div className="navbar-brand">
            SSTU
        </div>
        
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/" exact>Список групп</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/addGroup">Добавить группу</NavLink>
      </li>
      <li className="nav-item">
          <NavLink className="nav-link" to="/About">Задание</NavLink>
      </li>
     
    </ul>
        </nav>
)