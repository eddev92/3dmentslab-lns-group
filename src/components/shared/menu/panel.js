import React from 'react';

const MenuPanelComponent = ({ isActive = false }) => {
return (
  <div className={`menu-panel ${isActive ? 'menu-panel--active': ''}`}>
			<ul className="menu-panel__mobile-bar list-unstyled d-md-none">
				<li className="mobile-bar-item">
					<a className="mobile-bar-item__header collapsed" data-toggle="collapse" href="#mobile_collapse_1" role="button" aria-expanded="false" aria-controls="mobile_collapse_1">
						Main Links
						<span className="main-nav__toggle">&nbsp;</span>
					</a>
					<div id="mobile_collapse_1" className="collapse mobile-bar-item__body">

						<nav className="mobile-nav">
							<ul className="mobile-nav__list">
								<li className="active">
									<a href="#">Main Pages</a>
									<ul className="mobile-nav__sub">
										<li className=""><a href="index.html">Landing Image</a></li>
										<li className=""><a href="index-2.html">Landing Video</a></li>
										<li className="active"><a href="home.html">Home page</a></li>
										<li className=""><a href="blog-post.html">Post Page</a></li>
										<li className=""><a href="blog-1.html">News v1</a></li>
										<li className=""><a href="blog-2.html">News v2</a></li>
										<li className=""><a href="blog-3.html">News v3</a></li>
										<li className=""><a href="blog-4.html">News v4</a></li>
										<li className=""><a href="shop-account-settings.html">Account Settings</a></li>
										<li className=""><a href="shop-account-orders.html">Account Orders</a></li>
										<li className=""><a href="login-register.html">Login & Register</a></li>
										<li className=""><a href="features-about-us.html">About Us</a></li>
										<li className=""><a href="features-contact-us.html">Contact Us</a></li>
										<li className=""><a href="features-faqs.html">FAQs</a></li>
										<li className=""><a href="management-and-staff.html">Management & Staff</a></li>
										<li className=""><a href="streams-archive.html">Streams Page</a></li>
										<li className=""><a href="partners.html">Our Partners</a></li>
										<li className=""><a href="features-shortcodes.html">Shortcodes</a></li>
										<li className=""><a href="features-typography.html">Typography</a></li>
										<li className=""><a href="features-icons.html">Icons <span className="badge badge-danger">New</span></a></li>
										<li className=""><a href="features-bg-1.html">Backgrounds</a></li>
									</ul>
								</li>
								<li className="">
									<a href="#">Team Pages</a>
									<ul className="mobile-nav__sub">
										<li className=""><a href="team-selection-1.html">Team Selection v1</a></li>
										<li className=""><a href="team-selection-2.html">Team Selection v2</a></li>
										<li className=""><a href="team-selection-3.html">Team Selection v3</a></li>
										<li className=""><a href="team-selection-4.html">Team Selection v4</a></li>
										<li className=""><a href="team-overview.html">Team Overview v1</a></li>
										<li className=""><a href="team-overview-2.html">Team Overview v2</a></li>
										<li><a href="team-overview.html?slide=1">Team Statistics</a></li>
										<li><a href="team-overview.html?slide=2">Team Achievements</a></li>
										<li><a href="team-overview.html?slide=3">Team Matches</a></li>
									</ul>
								</li>
								<li className="">
									<a href="#">Player Pages</a>
									<ul className="mobile-nav__sub">
										<li><a href="team-player-1.html">Player Overview</a></li>
										<li><a href="team-player-1.html?slide=1">Player Statistics</a></li>
										<li><a href="team-player-1.html?slide=2">Player Achievements</a></li>
										<li><a href="team-player-1.html?slide=3">Player Hardware</a></li>
										<li><a href="team-player-1.html?slide=4">Player Stream</a></li>
									</ul>
								</li>
								<li className="">
									<a href="#">Match Pages</a>
									<ul className="mobile-nav__sub">
										<li className=""><a href="matches-scores.html">Match Scores</a></li>
										<li className=""><a href="matches-upcoming.html">Upcoming Matches</a></li>
										<li className=""><a href="matches-standings.html">Standings</a></li>
										<li className=""><a href="matches-overview-1.html">Match Overview v1</a></li>
										<li className=""><a href="matches-overview-2.html">Match Overview v2</a></li>
										<li className=""><a href="matches-stats-1.html">Match Stats v1</a></li>
										<li className=""><a href="matches-stats-2.html">Match Stats v2</a></li>
										<li className=""><a href="matches-stats-3.html">Match Stats v3</a></li>
										<li className=""><a href="matches-lineups-1.html">Match Lineups v1</a></li>
										<li className=""><a href="matches-lineups-2.html">Match Lineups v2</a></li>
										<li className=""><a href="matches-lineups-3.html">Match Lineups v3</a></li>
										<li className=""><a href="matches-replay.html">Match Replay</a></li>
									</ul>
								</li>
								<li className="">
									<a href="#">Shop Pages</a>
									<ul className="mobile-nav__sub">
										<li className=""><a href="shop.html">Shop Page v1</a></li>
										<li className=""><a href="shop-2.html">Shop Page v2</a></li>
										<li className=""><a href="shop-product.html">Product Page</a></li>
										<li className=""><a href="shop-checkout.html">Checkout Page</a></li>
									</ul>
								</li>
							</ul>
						</nav>

					</div>
				</li>
				<li className="mobile-bar-item">
					<a className="mobile-bar-item__header collapsed" data-toggle="collapse" href="#mobile_collapse_2" role="button" aria-expanded="false" aria-controls="mobile_collapse_2">
						Social Links
						<span className="main-nav__toggle">&nbsp;</span>
					</a>
					<div id="mobile_collapse_2" className="collapse mobile-bar-item__body">
						<ul className="social-menu social-menu--mobile-bar">
							<li><a href="https://www.facebook.com/danfisher.dev/"><span>Facebook</span></a></li>
							<li><a href="https://twitter.com/danfisher_dev"><span>Twitter</span></a></li>
							<li><a href="twitch.com"><span>Twitch</span></a></li>
							<li><a href="discordapp.com"><span>Discord</span></a></li>
						</ul>
					</div>
				</li>
				<li className="mobile-bar-item mobile-bar-item--info">
					<a className="mobile-bar-item__header collapsed" data-toggle="collapse" href="#mobile_collapse_3" role="button" aria-expanded="false" aria-controls="mobile_collapse_3">
						Get in Touch!
						<span className="main-nav__toggle">&nbsp;</span>
					</a>
					<div id="mobile_collapse_3" className="collapse mobile-bar-item__body">
						<div className="mobile-bar-item__inner">
							<ul className="list-unstyled">
								<li className="info-box">
									<div className="info-box__label">Max Parker - Recruiter</div>
									<div className="info-box__content"><a href="mailto:#">mp-recruit<span className="color-primary">@</span>necromancers.com</a></div>
								</li>
								<li className="info-box">
									<div className="info-box__label">Be our partner!</div>
									<div className="info-box__content"><a href="mailto:#">partners<span className="color-primary">@</span>necromancers.com</a></div>
								</li>
								<li className="info-box">
									<div className="info-box__label">General inquiries</div>
									<div className="info-box__content"><a href="mailto:#">inquiries<span className="color-primary">@</span>necromancers.com</a></div>
								</li>
							</ul>
						</div>
					</div>
				</li>
				<li className="mobile-bar-item mobile-bar-item--partners">
					<a id="mobile_collapse_4h" className="mobile-bar-item__header collapsed" data-toggle="collapse" href="#mobile_collapse_4" role="button" aria-expanded="false" aria-controls="mobile_collapse_4">
						Our Partners
						<span className="main-nav__toggle">&nbsp;</span>
					</a>
					<div id="mobile_collapse_4" className="collapse mobile-bar-item__body">
						<div className="mobile-bar-item__inner">
							<ul className="widget-partners-mobile-carousel">
								<li>
									<img src="img/samples/partner-carousel-img-01.png" alt="" />
								</li>
								<li>
									<img src="img/samples/partner-carousel-img-02.png" alt="" />
								</li>
								<li>
									<img src="img/samples/partner-carousel-img-03.png" alt="" />
								</li>
							</ul>
						</div>
					</div>
				</li>
				<li className="mobile-bar-item">
					<a className="mobile-bar-item__header" href="shop-account-settings.html">
						Account Settings
					</a>
				</li>
				<li className="mobile-bar-item">
					<a className="mobile-bar-item__header" href="login-register.html">
						Logout
					</a>
				</li>
			</ul>
			<div className="menu-panel__content d-none d-md-flex">
				<div className="menu-panel__navigation">
					<div id="dl-menu" className="dl-menuwrapper">
						{/* <!-- <button className="dl-trigger">Open Menu</button> --> */}
						<ul className="dl-menu dl-menuopen">
							<li className="active">
								<a href="home.html">INICIO</a>
							</li>
							<li className="">
								<a href="team-selection-2.html">NOSOTROS</a>
								<ul className="dl-submenu">
									<li className="">
										<a href="#">Team Selections</a>
										<ul className="dl-submenu">
											<li className=""><a href="team-selection-1.html">Team Selection v1</a></li>
											<li className=""><a href="team-selection-2.html">Team Selection v2</a></li>
											<li className=""><a href="team-selection-3.html">Team Selection v3</a></li>
											<li className=""><a href="team-selection-4.html">Team Selection v4</a></li>
										</ul>
									</li>
									<li className="">
										<a href="team-overview.html">Team Overview</a>
										<ul className="dl-submenu">
											<li className=""><a href="team-overview.html">Team Overview v1</a></li>
											<li className=""><a href="team-overview-2.html">Team Overview v2</a></li>
										</ul>
									</li>
									<li className=""><a href="team-player-1.html">Player Page</a></li>
								</ul>
							</li>
							<li className=""><a href="#">FABRICACIÓN</a>
								<ul className="dl-submenu">
									<li className=""><a href="matches-scores.html">Match Scores</a></li>
									<li className=""><a href="matches-upcoming.html">Upcoming Matches</a></li>
									<li className=""><a href="matches-standings.html">Standings</a></li>
									<li className=""><a href="#">Match Stats</a>
										<ul className="dl-submenu">
											<li className=""><a href="matches-stats-1.html">Match Stats v1</a></li>
											<li className=""><a href="matches-stats-2.html">Match Stats v2</a></li>
											<li className=""><a href="matches-stats-3.html">Match Stats v3</a></li>
										</ul>
									</li>
									<li className="">
										<a href="#">Match Lineups</a>
										<ul className="dl-submenu">
											<li className=""><a href="matches-lineups-1.html">Match Lineups v1</a></li>
											<li className=""><a href="matches-lineups-2.html">Match Lineups v2</a></li>
											<li className=""><a href="matches-lineups-3.html">Match Lineups v3</a></li>
										</ul>
									</li>
									<li className=""><a href="#">Match Overviews</a>
										<ul className="dl-submenu">
											<li className=""><a href="matches-overview-1.html">Match Overview v1</a></li>
											<li className=""><a href="matches-overview-2.html">Match Overview v2</a></li>
										</ul>
									</li>
									<li className=""><a href="matches-replay.html">Match Replay</a></li>
								</ul>
							</li>
							<li className="">
								<a href="blog-1.html">SERVICIOS</a>
							</li>
							{/* <li>
								<a href="#">Features</a>
								<ul className="dl-submenu dl-megamenu">
									<div className="row">
										<ul className="col-md-6 col-lg-4">
											<li className=""><a href="index.html">Landing Image</a></li>
											<li className=""><a href="index-2.html">Landing Video</a></li>
											<li className="active"><a href="home.html">Home page</a></li>
											<li className=""><a href="blog-1.html">News v1</a></li>
											<li className=""><a href="blog-2.html">News v2</a></li>
											<li className=""><a href="blog-3.html">News v3</a></li>
											<li className=""><a href="blog-4.html">News v4</a></li>
											<li className=""><a href="blog-post.html">Post Page</a></li>
											<li className=""><a href="shop-account-settings.html">Account Settings</a></li>
										</ul>
										<ul className="col-md-6 col-lg-4">
											<li className=""><a href="shop-account-orders.html">Account Orders</a></li>
											<li className=""><a href="login-register.html">Login & Register</a></li>
											<li className=""><a href="features-about-us.html">About Us</a></li>
											<li className=""><a href="features-faqs.html">FAQs</a></li>
											<li className=""><a href="features-contact-us.html">Contact Us</a></li>
											<li className=""><a href="management-and-staff.html">Management & Staff</a></li>
											<li className=""><a href="streams-archive.html">Streams Page</a></li>
											<li className=""><a href="partners.html">Our Partners</a></li>
										</ul>
										<ul className="col-md-12 col-lg-4">
											<li className=""><a href="features-shortcodes.html">Shortcodes</a></li>
											<li className=""><a href="features-typography.html">Typography</a></li>
											<li className=""><a href="features-icons.html">Icons <span className="badge badge-danger">New</span></a></li>
											<li className=""><a href="features-bg-1.html">Backgrounds</a></li>
										</ul>
									</div>
								</ul>
							</li> */}
							<li className="">
								<a href="shop.html">TIENDA</a>
								<ul className="dl-submenu">
									<li className=""><a href="shop.html">Shop Page v1</a></li>
									<li className=""><a href="shop-2.html">Shop Page v2</a></li>
									<li className=""><a href="shop-product.html">Product Page</a></li>
									<li className=""><a href="shop-checkout.html">Checkout Page</a></li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
				<div className="menu-panel__widget-area">
					<div className="row">
						<div className="col-md-12 col-lg-6 col-xl-5">
							<section className="widget widget-text">
								<h5 className="widget__title">¿Cuentas con alguna idea innovadora?</h5>
								<div className="widget__content">
									<p>
										Cuentanos sobre tu propuesta innovadora y trabajemos juntos en ella!
									</p>
									<div className="info-box">
										<div className="info-box__label">Max Parker - Recruiter</div>
										<div className="info-box__content"><a href="mailto:#">direccion.general<span className="color-primary">@</span>grupoinversionistalinus.com</a></div>
									</div>
									{/* <div className="info-box">
										<div className="info-box__label">Be our partner!</div>
										<div className="info-box__content"><a href="mailto:#">partners<span className="color-primary">@</span>grupoinversionistalinus.com</a></div>
									</div> */}
								</div>
							</section>
						</div>
						<div className="col-md-12 col-lg-6 col-xl-5 offset-xl-2 mt-5 mt-lg-0">
							<section className="widget widget-contact-info">
								<h5 className="widget__title">Contáctos</h5>
								<div className="widget__content">
									<p>
										Escribenos y nos pondremos en contacto contigo lo más pronto posible.
									</p>
									<div className="info-box">
										<div className="info-box__label">Consultas en general</div>
										<div className="info-box__content"><a href="mailto:#">hola<span className="color-primary">@</span>grupoinversionistalinus.com</a></div>
									</div>
									<div className="info-box">
										<div className="info-box__label">¿Deseas importar?</div>
										<div className="info-box__content"><a href="mailto:#">importaciones<span className="color-primary">@</span>grupoinversionistalinus.com</a></div>
									</div>
									<ul className="social-menu social-menu--default">
										<li><a href="https://www.facebook.com/danfisher.dev/"></a></li>
										<li><a href="https://twitter.com/danfisher_dev"></a></li>
										<li><a href="https://twitch.com"></a></li>
										<li><a href="https://discord.gg/xxxx"></a></li>
									</ul>
								</div>
							</section>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<section className="widget widget-partners-carousel">
								<h5 className="widget__title">Nuestros asociados</h5>
								<div className="widget__content">
									{/* <ul>
										<li>
											<img src="img/samples/partner-carousel-img-01.png" alt="" />
										</li>
										<li>
											<img src="img/samples/partner-carousel-img-02.png" alt="" />
										</li>
										<li>
											<img src="img/samples/partner-carousel-img-03.png" alt="" />
										</li>
										<li>
											<img src="img/samples/partner-carousel-img-01.png" alt="" />
										</li>
										<li>
											<img src="img/samples/partner-carousel-img-02.png" alt="" />
										</li>
										<li>
											<img src="img/samples/partner-carousel-img-03.png" alt="" />
										</li>
									</ul> */}
								</div>
							</section>
						</div>
					</div>
				</div>
			</div>
	</div>
)
}

export default MenuPanelComponent;
