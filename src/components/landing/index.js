import React, { useState } from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import HomeComponent from '../home'
// import history from '../../utils/utils'

const LandingComponent = ({ history }) => {
  const [goHome, setGoHome] = useState(false);
  const toHome = () => {
    setGoHome(true)
    history.push('/home')
  }
  // if (goHome) return <HomeComponent isActive={goHome} />
  return (
  <div class="site-wrapper">

  <header id="header" class="site-header site-header--landing">
    <div class="header-logo header-logo--img">
      <a href="index.html"><img src="assets/img/logo.png" srcset="assets/img/logo@2x.png 2x" alt="Necromancers" /></a>
    </div>
  </header>

  <main class="site-content text-center" id="wrapper">
    
    <div class="site-content__center">
      <h1 class="text-white landing-title">
        {/* <span class="subtitle landing-subtitle">Esports and Streaming</span> */}
        GRUPO INVERSIONISTA LINUS</h1>
      <a onClick={toHome} class="btn btn-primary btn-lg btn--landing"><span>ENTRAR</span></a>
    </div>
    
  </main>

  <footer id="footer" class="footer text-center">
    <ul class="social-menu social-menu--landing social-menu--landing-glitch">
      <li>
        <a href="https://www.facebook.com/danfisher.dev/" target="_blank">
          <i class="fab fa-facebook-square"></i>
          <span class="link-subtitle">Facebook</span>3D MENTES LAB
        </a>
      </li>
      <li>
        <a href="https://twitter.com/danfisher_dev" target="_blank">
          <i class="fab fa-twitter"></i>
          <span class="link-subtitle">Twitter</span>FRUTOS DE LA SELVA
        </a>
      </li>
      <li>
        <a href="https://twitch.com" target="_blank">
          <i class="fab fa-twitch"></i>
          <span class="link-subtitle">Twitch</span>RUEDAS LOCAS
        </a>
      </li>
      <li>
        <a href="https://discordapp.com/" target="_blank">
          <i class="fab fa-discord"></i>
          <span class="link-subtitle">Discord</span>DETODOUN_POCO
        </a>
      </li>
    </ul>
  </footer>

    <div class="landing-detail landing-detail--left">
      <span>&nbsp;</span>
      <span>&nbsp;</span>
      <span>&nbsp;</span>
    </div>
    <div class="landing-detail-cover landing-detail-cover--left">
      <span>&nbsp;</span>
      <span>&nbsp;</span>
      <span>&nbsp;</span>
    </div>
    <div class="landing-detail landing-detail--right">
      <span>&nbsp;</span>
      <span>&nbsp;</span>
      <span>&nbsp;</span>
    </div>
    <div class="landing-detail-cover landing-detail-cover--right">
      <span>&nbsp;</span>
      <span>&nbsp;</span>
      <span>&nbsp;</span>
    </div>
  </div>
  )
}

export default LandingComponent;
