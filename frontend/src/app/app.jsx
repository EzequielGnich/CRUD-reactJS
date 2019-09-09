import "./app.css";
import React from "react";

import Logo from '../components/templates/logo/logo'
import Nav from '../components/templates/nav/nav'
import Main from '../components/templates/main/main'
import Footer from '../components/templates/footer/footer'

export default props => (
  <div className="app">
    <Logo />
    <Nav />
    <Main />
    <Footer />
  </div>
)