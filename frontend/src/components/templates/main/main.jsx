import './main.css'
import React from 'react'

import Header from '../header/header'

export default props => (
  <>
    <Header {...props} />
    <main className="content">
      Conteúdo
    </main>
  </>
)