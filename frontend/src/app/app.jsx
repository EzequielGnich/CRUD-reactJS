import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import "./app.css";
import React from "react";
import { HashRouter } from 'react-router-dom'

import Routes from "./routes"
import Logo from '../components/templates/logo/logo'
import Nav from '../components/templates/nav/nav'
import Footer from '../components/templates/footer/footer'

export default props => (
  <HashRouter>
    <div className="app">
      <Logo />
      <Nav />
      <Routes />
      <Footer />
    </div>
  </HashRouter>
)