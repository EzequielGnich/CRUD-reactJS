import './nav.css'
import React from 'react'

export default props => (
  <aside className="menu-area">
    <nav className="menu">
    {/* Refatorar para um componente */}
      <a href="#/">
        <i className="fa fa-home"></i>
        <label>&nbsp;Início</label>
      </a>
      <a href="#/users">
        <i className="fa fa-users"></i>
        <label>&nbsp;Usuários</label>
      </a>
    </nav>
  </aside>
)