import React from 'react'
import Main from '../main/main'

import './home.css'

export default props => (
  <Main icon="home" title="Inicio" subtitle="Projeto Crud react!">
    <div className="display-4">Bem vindo</div>
    <hr />
    <p className="mb-0 text-center">Sistema de cadastro de usuários desenvolvido em React!</p>
  </Main>
)