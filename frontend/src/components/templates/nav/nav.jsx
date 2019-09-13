import './nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props => (
  <aside className="menu-area">
    <nav className="menu">
    {/* Refatorar para um componente */}
      <Link to="/">
        <i className="fa fa-home"></i>
        <label>&nbsp;Início</label>
      </Link>
      <Link to="/users">
        <i className="fa fa-users"></i>
        <label>&nbsp;Usuários</label>
      </Link>
    </nav>
  </aside>
)