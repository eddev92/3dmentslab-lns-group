import React from 'react';

const MenuComponent = ({ handleClick = null, openMenu = false }) => {
return (
  <header id="header" className="site-header site-header--bottom">
		
    <div className="header-logo header-logo--img">
      <a href="index.html"><img src="img/logo.png" srcset="img/logo@2x.png 2x" alt="Necromancers" /></a>
    </div>

    <nav className="main-nav">
      <ul className="main-nav__list">
        <li className="active"><a href="home.html">Home</a></li>
        <li className="">
          <a href="#">Teams</a>
          <ul className="main-nav__sub">
            <li className="">
              <a href="#">Team Selections</a>
              <ul className="main-nav__sub">
                <li className=""><a href="team-selection-1.html">Team Selection v1</a></li>
                <li className=""><a href="team-selection-2.html">Team Selection v2</a></li>
                <li className=""><a href="team-selection-3.html">Team Selection v3</a></li>
                <li className=""><a href="team-selection-4.html">Team Selection v4</a></li>
              </ul>
            </li>
            <li className="">
              <a href="team-overview.html">Team Overview</a>
              <ul className="main-nav__sub">
                <li className=""><a href="team-overview.html">Team Overview v1</a></li>
                <li className=""><a href="team-overview-2.html">Team Overview v2</a></li>
              </ul>
            </li>
            <li className=""><a href="team-player-1.html">Player Page</a></li>
          </ul>
        </li>
        <li className=""><a href="#">Matches</a>
          <ul className="main-nav__sub">
            <li className=""><a href="matches-scores.html">Match Scores</a></li>
            <li className=""><a href="matches-upcoming.html">Upcoming Matches</a></li>
            <li className=""><a href="matches-standings.html">Standings</a></li>
            <li className=""><a href="#">Match Stats</a>
              <ul className="main-nav__sub">
                <li className=""><a href="matches-stats-1.html">Match Stats v1</a></li>
                <li className=""><a href="matches-stats-2.html">Match Stats v2</a></li>
                <li className=""><a href="matches-stats-3.html">Match Stats v3</a></li>
              </ul>
            </li>
            <li className="">
              <a href="#">Match Lineups</a>
              <ul className="main-nav__sub">
                <li className=""><a href="matches-lineups-1.html">Match Lineups v1</a></li>
                <li className=""><a href="matches-lineups-2.html">Match Lineups v2</a></li>
                <li className=""><a href="matches-lineups-3.html">Match Lineups v3</a></li>
              </ul>
            </li>
            <li className=""><a href="#">Match Overviews</a>
              <ul className="main-nav__sub">
                <li className=""><a href="matches-overview-1.html">Match Overview v1</a></li>
                <li className=""><a href="matches-overview-2.html">Match Overview v2</a></li>
              </ul>
            </li>
            <li className=""><a href="matches-replay.html">Match Replay</a></li>
          </ul>
        </li>
        <li className=""><a href="#">News</a>
          <ul className="main-nav__sub">
            <li className=""><a href="blog-1.html">News v1</a></li>
            <li className=""><a href="blog-2.html">News v2</a></li>
            <li className=""><a href="blog-3.html">News v3</a></li>
            <li className=""><a href="blog-4.html">News v4</a></li>
            <li className=""><a href="blog-post.html">Post Page</a></li>
          </ul>
        </li>
        <li><a href="#">Features</a>
          <div className="main-nav__megamenu">
            <div className="row">
              <div className="col-md-4">
                <h6 className="main-nav__title">Main Pages</h6>
                <div className="row">
                  <ul className="col-md-4">
                    <li className=""><a href="index.html">Landing Image</a></li>
                    <li className=""><a href="index-2.html">Landing Video</a></li>
                    <li className=""><a href="blog-1.html">News v1</a></li>
                    <li className=""><a href="blog-2.html">News v2</a></li>
                    <li className=""><a href="blog-3.html">News v3</a></li>
                    <li className=""><a href="blog-4.html">News v4</a></li>
                  </ul>
                  <ul className="col-md-4">
                    <li className=""><a href="shop-account-settings.html">Account Settings</a></li>
                    <li className=""><a href="shop-account-orders.html">Account Orders</a></li>
                    <li className=""><a href="login-register.html">Login & Register</a></li>
                    <li className=""><a href="features-about-us.html">About Us</a></li>
                    <li className=""><a href="features-contact-us.html">Contact Us</a></li>
                    <li className=""><a href="features-faqs.html">FAQs</a></li>
                  </ul>
                  <ul className="col-md-4">
                    <li className=""><a href="management-and-staff.html">MGMT & Staff</a></li>
                    <li className=""><a href="streams-archive.html">Streams Page</a></li>
                    <li className=""><a href="partners.html">Our Partners</a></li>
                    <li className=""><a href="features-shortcodes.html">Shortcodes</a></li>
                    <li className=""><a href="features-typography.html">Typography</a></li>
                    <li className=""><a href="features-icons.html">Icons <span className="badge badge-danger">New</span></a></li>
                    <li className=""><a href="features-bg-1.html">Backgrounds</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row">
                  <h6 className="col-md-8 main-nav__title">Team Pages</h6>
                  <h6 className="col-md-4 main-nav__title">Player Pages</h6>
                </div>
                <div className="row">
                  <ul className="col-md-4">
                    <li className=""><a href="team-selection-1.html">Team Selection v1</a></li>
                    <li className=""><a href="team-selection-2.html">Team Selection v2</a></li>
                    <li className=""><a href="team-selection-3.html">Team Selection v3</a></li>
                    <li className=""><a href="team-selection-4.html">Team Selection v4</a></li>
                    <li className=""><a href="team-overview.html">Team Overview v1</a></li>
                    <li className=""><a href="team-overview-2.html">Team Overview v2</a></li>
                  </ul>
                  <ul className="col-md-4">
                    <li><a href="team-overview.html?slide=1">Team Statistics</a></li>
                    <li><a href="team-overview.html?slide=2">Team Achv</a></li>
                    <li><a href="team-overview.html?slide=3">Team Matches</a></li>
                  </ul>
                  <ul className="col-md-4">
                    <li><a href="team-player-1.html">Player Overview</a></li>
                    <li><a href="team-player-1.html?slide=1">Player Statistics</a></li>
                    <li><a href="team-player-1.html?slide=2">Player Achv</a></li>
                    <li><a href="team-player-1.html?slide=3">Player Hardware</a></li>
                    <li><a href="team-player-1.html?slide=4">Player Stream</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row">
                  <h6 className="col-md-8 main-nav__title">Match Pages</h6>
                  <h6 className="col-md-4 main-nav__title">Shop Pages</h6>
                </div>
                <div className="row">
                  <ul className="col-md-4">
                    <li className=""><a href="matches-scores.html">Match Scores</a></li>
                    <li className=""><a href="matches-upcoming.html">Upcoming Matches</a></li>
                    <li className=""><a href="matches-standings.html">Standings</a></li>
                    <li className=""><a href="matches-overview-1.html">Overview v1</a></li>
                    <li className=""><a href="matches-overview-2.html">Overview v2</a></li>
                    <li className=""><a href="matches-stats-1.html">Match Stats v1</a></li>
                  </ul>
                  <ul className="col-md-4">
                    <li className=""><a href="matches-stats-2.html">Match Stats v2</a></li>
                    <li className=""><a href="matches-stats-3.html">Match Stats v3</a></li>
                    <li className=""><a href="matches-lineups-1.html">Match Lineups v1</a></li>
                    <li className=""><a href="matches-lineups-2.html">Match Lineups v2</a></li>
                    <li className=""><a href="matches-lineups-3.html">Match Lineups v3</a></li>
                    <li className=""><a href="matches-replay.html">Match Replay</a></li>
                  </ul>
                  <ul className="col-md-4">
                    <li className=""><a href="shop.html">Shop Page v1</a></li>
                    <li className=""><a href="shop-2.html">Shop Page v2</a></li>
                    <li className=""><a href="shop-product.html">Product Page</a></li>
                    <li className=""><a href="shop-checkout.html">Checkout Page</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="">
          <a href="#">Shop</a>
          <ul className="main-nav__sub">
            <li className=""><a href="shop.html">Shop Page v1</a></li>
            <li className=""><a href="shop-2.html">Shop Page v2</a></li>
            <li className=""><a href="shop-product.html">Product Page</a></li>
            <li className=""><a href="shop-checkout.html">Checkout Page</a></li>
          </ul>
        </li>
      </ul>
    </nav>

    <div className="header-actions">
        <div className="header-pagination">
          <a href="#" className="header-scroll-arrow header-scroll-arrow--left">
            <svg role="img" className="df-icon df-icon--left-arrow">
              {/* <use xlink:href="img/necromancers.svg#left-arrow"/> */}
            </svg>
          </a>
          {/* <ol className="header-pagination--list">
            <li><a href="#">01</a></li>
            <li><a href="#">02</a></li>
            <li><span>...</span></li>
            <li><a href="#">08</a></li>
          </ol> */}
          <a href="#" className="header-scroll-arrow header-scroll-arrow--right">
            <svg role="img" className="df-icon df-icon--right-arrow">
              {/* <use xlink:href="img/necromancers.svg#right-arrow"/> */}
            </svg>
          </a>
        </div>
        <div className="header-filter-toggle">
          <svg role="img" className="df-icon df-icon--filter">
            {/* <use xlink:href="img/necromancers.svg#filter"/> */}
          </svg>
          <div className="filter-menu">
            <form action="#" className="filter-menu__form">
              <div className="filter-menu__select">
                <label className="filter-menu__label">Category</label>
                <select className="cs-select">
                  <option value="" selected>All Categories</option>
                  <option value="">Esports</option>
                  <option value="">Gaming</option>
                  <option value="">Videos</option>
                </select>
              </div>
              <div className="filter-menu__select">
                <label className="filter-menu__label">Filter By</label>
                <select className="cs-select">
                  <option value="" selected>Article Date</option>
                  <option value="">Comments</option>
                  <option value="">Popularity</option>
                </select>
              </div>
              <div className="filter-menu__select">
                <label className="filter-menu__label">Order</label>
                <select className="cs-select">
                  <option value="" selected>Ascending</option>
                  <option value="">Descending</option>
                </select>
              </div>
              <div className="filter-menu__submit">
                <button type="submit" className="btn btn-primary btn-sm btn-block">Filter News</button>
              </div>
            </form>
          </div>
        </div>
      <div className="header-top-bar-toggle d-md-none hide">
        <svg role="img" className="df-icon df-icon--joystick">
          {/* <use xlink:href="img/necromancers.svg#joystick"/> */}
        </svg>
        <svg role="img" className="df-icon df-icon--close">
          {/* <use xlink:href="img/necromancers.svg#close"/> */}
        </svg>
      </div>
      <div className="header-social-toggle d-none d-md-block">
        <svg role="img" className="df-icon df-icon--thumb-up">
          {/* <use xlink:href="img/necromancers.svg#thumb-up"/> */}
        </svg>
        {/* <span className="header-social-toggle__plus">&nbsp;</span>
        <ul className="social-menu social-menu--header">
          <li><a href="https://discord.gg/xxxx"><span className="link-subtitle">Discord</span>Necrochat</a></li>
          <li><a href="https://twitch.com"><span className="link-subtitle">Twitch</span>Necroplay</a></li>
          <li><a href="https://twitter.com/danfisher_dev"><span className="link-subtitle">Twitter</span>Necrotwt</a></li>
          <li><a href="https://www.facebook.com/danfisher.dev/"><span className="link-subtitle">Facebook</span>Necrogame</a></li>
        </ul> */}
      </div>
      <div className="header-search-toggle">
        <svg role="img" className="df-icon df-icon--search">
          {/* <use xlink:href="img/necromancers.svg#search"/> */}
        </svg>
        <svg role="img" className="df-icon df-icon--search-close">
          {/* <use xlink:href="img/necromancers.svg#search-close"/> */}
        </svg>
      </div>
      <div className="header-account hide">
        <div className="header-account__avatar">
          <img src="img/samples/account-user-avatar.jpg" srcset="img/samples/account-user-avatar@2x.jpg 2x" alt="" />
        </div>
        <div className="header-account__body">
          Hello!
          <div className="header-account__name">James Spiegel</div>
        </div>
        <div className="header-account__icon">
          <a href="shop-account-settings.html">
            <svg role="img" className="df-icon df-icon--account">
              {/* <use xlink:href="img/necromancers.svg#account"/> */}
            </svg>
          </a>
          <a href="login-register.html">
            <svg role="img" className="df-icon df-icon--logout">
              {/* <use xlink:href="img/necromancers.svg#logout"/> */}
            </svg>
          </a>
        </div>
      </div>
      <div className={`header-menu-toggle ${openMenu ? 'toggled' : ''}`} onClick={handleClick}>
        <div className="header-menu-toggle__inner">
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
        </div>
      </div>
    </div>
  </header>
  )
}

export default MenuComponent;
