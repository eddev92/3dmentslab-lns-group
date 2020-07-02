import React from 'react';

const HomeComponent = (isActive = false) => {
  const bodyAux = document.querySelectorAll(".cursor-is--active")
  if (isActive && bodyAux && bodyAux[0]) {
    bodyAux[0].classList.add("site-layout--horizontal")
    bodyAux[0].classList.add("scroll-is--active")
    // site-layout--horizontal cursor-is--active scroll-is--active
  }
  return (
    <div className="site-wrapper">
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
						<ol className="header-pagination--list">
							<li><a href="#">01</a></li>
							<li><a href="#">02</a></li>
							<li><span>...</span></li>
							<li><a href="#">08</a></li>
						</ol>
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
					<span className="header-social-toggle__plus">&nbsp;</span>
					<ul className="social-menu social-menu--header">
						<li><a href="https://discord.gg/xxxx"><span className="link-subtitle">Discord</span>Necrochat</a></li>
						<li><a href="https://twitch.com"><span className="link-subtitle">Twitch</span>Necroplay</a></li>
						<li><a href="https://twitter.com/danfisher_dev"><span className="link-subtitle">Twitter</span>Necrotwt</a></li>
						<li><a href="https://www.facebook.com/danfisher.dev/"><span className="link-subtitle">Facebook</span>Necrogame</a></li>
					</ul>
				</div>
				<div className="header-cart-toggle">
					<svg role="img" className="df-icon df-icon--bag">
						{/* <use xlink:href="img/necromancers.svg#bag"/> */}
					</svg>
					<svg role="img" className="df-icon df-icon--close">
						{/* <use xlink:href="img/necromancers.svg#close"/> */}
					</svg>
					<span className="header-cart-toggle__items-count">4</span>
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
				<div className="header-menu-toggle">
					<div className="header-menu-toggle__inner">
						<span>&nbsp;</span>
						<span>&nbsp;</span>
						<span>&nbsp;</span>
					</div>
				</div>
			</div>
		</header>

		<main className="site-content" id="wrapper">
			
			<div className="widget-area widger-area--before-loop">
				<div className="widget widget-carousel slick-slider">
					<article className="widget-carousel__item player bg-image bg--ph-03">
						<div className="player__subtitle h6">Welcome</div>
						<h1 className="player__title h3 color-primary">JULIE_NOIRE</h1>
						<div className="player__body">
							<div className="h5">To the <span className="color-primary">Xenovrese</span> team!</div>
						</div>
						<div className="player__thumbnail">
							<img src="img/samples/team-info-page-player-photo-03.png" alt="" />
							<a href="team-player-3.html" className="more-info-link h6"><span className="add-icon"></span>More info</a>
						</div>
					</article>
					<article className="widget-carousel__item player bg-image bg--ph-05">
						<div className="player__subtitle h6">Congratulations!</div>
						<h1 className="player__title h3">Crazzzy_80</h1>
						<div className="player__body">
							<div className="h5 color-primary">Reached 10k twitch subs</div>
						</div>
						<div className="player__thumbnail">
							<img src="img/samples/team-info-page-player-photo-04.png" alt="0" />
							<a href="team-player-4.html" className="more-info-link h6"><span className="add-icon"></span>More info</a>
						</div>
					</article>
					<article className="widget-carousel__item player bg-image bg--ph-06">
						<div className="player__subtitle h6">Featured player</div>
						<h1 className="player__title h3 color-warning">G-Huntress</h1>
						<div className="player__body">
							<ul className="player__stats">
								<li className="counter">
									<div className="counter__number">28</div>
									<div className="counter__label">Games</div>
								</li>
								<li className="counter">
									<div className="counter__number">73</div>
									<div className="counter__label">Kills</div>
								</li>
								<li className="counter">
									<div className="counter__number">96</div>
									<div className="counter__label">Win %</div>
								</li>
							</ul>
						</div>
						<div className="player__thumbnail">
							<img src="img/samples/team-info-page-player-photo-02.png" alt="" />
							<a href="team-player-2.html" className="more-info-link h6"><span className="add-icon"></span>More info</a>
						</div>
					</article>
				</div>
			</div>
			<div className="content blog-layout--style-1">
			
				<article className="post has-post-thumbnail ">
					<div className="post__thumbnail">
			
						<a href="blog-post.html"><img src="img/samples/news-v1-post-img-01.jpg" alt="" /></a>
			
			
					</div>
					<div className="post__body">
						<div className="post__header">
							<ul className="post__cats list-unstyled">
								<li className="post__cats-item color-warning">
									<a href="#">Gaming</a>
								</li>
							</ul>
							<h2 className="post__title h4"><a href="blog-post.html">League of heroes presented a new character</a></h2>
							<ul className="post__meta list-unstyled">
								<li className="post__meta-item post__meta-item--date">
									<a href="#">August 15th, 2018</a>
								</li>
							</ul>
						</div>
						<div className="post__excerpt">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit mollitia modi, tempore, pariatur, error quaerat dolorum laborum, commodi laudantium soluta sit reiciendis praesentium dolore cumque ab.
						</div>
					</div>
				</article>
				<article className="post has-post-thumbnail ">
					<div className="post__thumbnail">
			
						<a href="blog-post.html"><img src="img/samples/news-v1-post-img-02.jpg" alt="" /></a>
			
			
					</div>
					<div className="post__body">
						<div className="post__header">
							<ul className="post__cats list-unstyled">
								<li className="post__cats-item color-success">
									<a href="#">eSports</a>
								</li>
							</ul>
							<h2 className="post__title h4"><a href="blog-post.html">The Necromancers emerge victorious once more!</a></h2>
							<ul className="post__meta list-unstyled">
								<li className="post__meta-item post__meta-item--date">
									<a href="#">August 14th, 2018</a>
								</li>
							</ul>
						</div>
						<div className="post__excerpt">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit mollitia modi, tempore, pariatur, error quaerat dolorum laborum, commodi laudantium soluta sit reiciendis praesentium dolore cumque ab.
						</div>
					</div>
				</article>
				<article className="post has-post-thumbnail ">
					<div className="post__thumbnail">
			
						<a href="blog-post.html"><img src="img/samples/news-v1-post-img-03.jpg" alt="" /></a>
			
			
					</div>
					<div className="post__body">
						<div className="post__header">
							<ul className="post__cats list-unstyled">
								<li className="post__cats-item color-success">
									<a href="#">eSports</a>
								</li>
							</ul>
							<h2 className="post__title h4"><a href="blog-post.html">Matt Rodgers talks about becoming a pro gamer</a></h2>
							<ul className="post__meta list-unstyled">
								<li className="post__meta-item post__meta-item--date">
									<a href="#">August 10th, 2018</a>
								</li>
							</ul>
						</div>
						<div className="post__excerpt">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit mollitia modi, tempore, pariatur, error quaerat dolorum laborum, commodi laudantium soluta sit reiciendis praesentium dolore cumque ab.
						</div>
					</div>
				</article>
				<article className="post has-post-thumbnail ">
					<div className="post__thumbnail">
			
						<a href="blog-post.html"><img src="img/samples/news-v1-post-img-04.jpg" alt="" /></a>
			
			
					</div>
					<div className="post__body">
						<div className="post__header">
							<ul className="post__cats list-unstyled">
								<li className="post__cats-item color-warning">
									<a href="#">Gaming</a>
								</li>
							</ul>
							<h2 className="post__title h4"><a href="blog-post.html">Magimons will have a new className: Pyromancer</a></h2>
							<ul className="post__meta list-unstyled">
								<li className="post__meta-item post__meta-item--date">
									<a href="#">August 8th, 2018</a>
								</li>
							</ul>
						</div>
						<div className="post__excerpt">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit mollitia modi, tempore, pariatur, error quaerat dolorum laborum, commodi laudantium soluta sit reiciendis praesentium dolore cumque ab.
						</div>
					</div>
				</article>
				<article className="post has-post-thumbnail  post--video">
					<div className="post__thumbnail">
			
			
						<a href="https://www.youtube.com/watch?v&#x3D;XE0fU9PCrWE" className="mp_iframe">
							<img src="img/samples/news-v4-post-img-04.jpg" alt="" />
							<div className="post__thumbnail-icon">
								<span className="lightbox__icon">43232432</span>
							</div>
						</a>
			
					</div>
					<div className="post__body">
						<div className="post__header">
							<ul className="post__cats list-unstyled">
								<li className="post__cats-item color-danger">
									<a href="#">Videos</a>
								</li>
							</ul>
							<h2 className="post__title h4"><a href="blog-post.html">Jack shows a sneak peak of the new loh expansion</a></h2>
							<ul className="post__meta list-unstyled">
								<li className="post__meta-item post__meta-item--date">
									<a href="#">August 3rd, 2018</a>
								</li>
							</ul>
						</div>
						<div className="post__excerpt">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit mollitia modi, tempore, pariatur, error quaerat dolorum laborum, commodi laudantium soluta sit reiciendis praesentium dolore cumque ab.
						</div>
					</div>
				</article>
				<article className="post has-post-thumbnail ">
					<div className="post__thumbnail">
			
						<a href="blog-post.html"><img src="img/samples/news-v4-post-img-06.jpg" alt="" /></a>
			
			
					</div>
					<div className="post__body">
						<div className="post__header">
							<ul className="post__cats list-unstyled">
								<li className="post__cats-item color-success">
									<a href="#">eSports</a>
								</li>
							</ul>
							<h2 className="post__title h4"><a href="blog-post.html">The team tested the new vr pod at 2018 gamexcon</a></h2>
							<ul className="post__meta list-unstyled">
								<li className="post__meta-item post__meta-item--date">
									<a href="#">July 24th, 2018</a>
								</li>
							</ul>
						</div>
						<div className="post__excerpt">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit mollitia modi, tempore, pariatur, error quaerat dolorum laborum, commodi laudantium soluta sit reiciendis praesentium dolore cumque ab.
						</div>
					</div>
				</article>			
			</div>
		</main>


		<div className="site-overlay"></div>

		<div className="cart-panel">
			<h4 className="cart-panel__title text-white">Shopping Cart (<span className="cart-panel__items-count">4</span>)</h4>
			<div className="cart-panel__content">
				<div className="table-responsive">
					<table className="table shop-table">
						<thead>
							<tr>
								<th className="product__info">Product</th>
								<th className="product__quantity">Quantity</th>
								<th className="product__total">Total</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="product__info">
									<figure className="product__thumb">
										<a href="#"><img src="img/cart-panel-img-01.jpg" alt="" /></a>
									</figure>
									<div className="product__info-content">
										<h5 className="product__name"><a href="#">Magimons Black Frame Print</a></h5>
										<span className="product__cat">Framed Prints</span>
										<span className="product__info-details">24"x12" | Glossy</span>
									</div>
								</td>
								<td className="product__quantity">
									<div className="quantity-control">
										<button className="quantity-control__minus">&nbsp;</button>
										<input type="number" step="1" value="1" size="4" />
										<button className="quantity-control__plus">&nbsp;</button>
									</div>
								</td>
								<td className="product__total"><span className="product__total-currency">$</span>38.00</td>
								<td className="product__remove"><a href="#" className="product__remove-icon"></a></td>
							</tr>
							<tr>
								<td className="product__info">
									<figure className="product__thumb">
										<a href="#"><img src="img/cart-panel-img-02.jpg" alt="" /></a>
									</figure>
									<div className="product__info-content">
										<h5 className="product__name"><a href="#">Necromancers Men's T-Shirt</a></h5>
										<span className="product__cat">Clothing</span>
										<span className="product__info-details">Black | Medium</span>
									</div>
								</td>
								<td className="product__quantity">
									<div className="quantity-control">
										<button className="quantity-control__minus">&nbsp;</button>
										<input type="number" step="1" value="2" size="4" />
										<button className="quantity-control__plus">&nbsp;</button>
									</div>
								</td>
								<td className="product__total"><span className="product__total-currency">$</span>49.98</td>
								<td className="product__remove"><a href="#" className="product__remove-icon"></a></td>
							</tr>
							<tr>
								<td className="product__info">
									<figure className="product__thumb">
										<a href="#"><img src="img/cart-panel-img-03.jpg" alt="" /></a>
									</figure>
									<div className="product__info-content">
										<h5 className="product__name"><a href="#">Necromancers Ennamel Mug</a></h5>
										<span className="product__cat">Coffee Mugs</span>
										<span className="product__info-details">White</span>
									</div>
								</td>
								<td className="product__quantity">
									<div className="quantity-control">
										<button className="quantity-control__minus">&nbsp;</button>
										<input type="number" step="1" value="1" size="4" />
										<button className="quantity-control__plus">&nbsp;</button>
									</div>
								</td>
								<td className="product__total"><span className="product__total-currency">$</span>16.00</td>
								<td className="product__remove"><a href="#" className="product__remove-icon"></a></td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="cart-panel__totals">
					<div className="table-responsive">
						<table className="table">
							<tfoot>
								<tr className="cart-panel__subtotal">
									<th>Cart Subtotal</th>
									<td>
										<span className="amount"><span className="amount-currency">$</span>103.98</span>
									</td>
								</tr>
								<tr className="cart-panel__shipping">
									<th>Estimated Shipping</th>
									<td><span className="amount"><span className="amount-currency">$</span>14.00</span></td>
								</tr>
								<tr className="cart-panel__order-total">
									<th>Cart Total</th>
									<td><span className="amount"><span className="amount-currency">$</span>117.98</span></td>
								</tr>
								</tfoot>
						</table>
						<a href="shop-checkout.html" className="btn btn-primary">Go to checkout</a>
					</div>
				</div>
			</div>
		</div>

		<div className="search-panel">
			<div className="search-panel__content">
				<form action="#" id="header-search-form" className="search-form search-form--header">
					<input type="text" className="form-control" value="" placeholder="What are you looking for...?" />
				</form>
				<span>Write what you are looking for, choose the filters and press enter to begin your search!</span>
			</div>
		</div>

		<div className="menu-panel">
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
			<div className="menu-panel__top-bar">
				<div className="top-bar-filter">
					<label className="top-bar-filter__label">Competitions</label>
					<select className="cs-select">
						<option value="all" selected>All Competitions</option>
						<option value="x2018">Xenowatch 2018 Tournament</option>
						<option value="xwleague">Xenowatch West League</option>
						<option value="xeleague">Xenowatch East League</option>
						<option value="xusacup">Xenowatch USA Cup</option>
					</select>
				</div>
				<ul className="top-bar-carousel">
					<li className="top-bar-carousel__headline x2018">
						<span>Xenowatch 2018 Tournament</span>
					</li>
					<li className="top-bar-carousel__item x2018">
						<div className="match-score-inline">
							<div className="match-score-inline__body">
								<div className="match-score-inline__body-inner">
									<figure className="match-team" role="group">
										<figure className="match-team-logo match-team-logo--team-1" role="group">
											<img src="img/samples/logo-necromancers-30.png" srcset="img/samples/logo-necromancers-30@2x.png 2x" alt="NCR Logo" />
										</figure>
										<figcaption>
											<div className="match-team__name">NCR</div>
												<div className="match-team__country ">USA</div>
										</figcaption>
									</figure>
									<div className="match-result match-result--winner-right">
										<span className="match-result__score">2</span>
									</div>
									<div className="match-result match-result--live">
										<span className="match-result__label">25:42</span>
									</div>
								</div>
								<div className="match-score-inline__body-inner">
									<figure className="match-team" role="group">
										<figure className="match-team-logo match-team-logo--team-2" role="group">
											<img src="img/samples/logo-rhinos-30.png" srcset="img/samples/logo-rhinos-30@2x.png 2x" alt="RRH Logo" />
										</figure>
										<figcaption>
											<div className="match-team__name">RRH</div>
												<div className="match-team__country ">JPN</div>
										</figcaption>
									</figure>
									<div className="match-result">
										<span className="match-result__score">1</span>
									</div>
									<div className="match-result">
										<span className="match-result__label">01/12</span>
									</div>
								</div>
							</div>
							<div className="match-score-inline__footer">
								<ul className="match-stats-links">
									<li>
										<a href="matches-overview-1.html">
											<svg role="img" className="df-icon df-icon--match-overview">
												{/* <use xlink:href="img/necromancers.svg#match-overview"/> */}
											</svg>
										</a>
									</li>
									<li>
										<a href="matches-stats-1.html">
											<svg role="img" className="df-icon df-icon--match-stats">
												{/* <use xlink:href="img/necromancers.svg#match-stats"/> */}
											</svg>
										</a>
									</li>
									<li>
										<a href="matches-lineups-1.html">
											<svg role="img" className="df-icon df-icon--match-lineups">
												{/* <use xlink:href="img/necromancers.svg#match-lineups"/> */}
											</svg>
										</a>
									</li>
									<li>
										<a href="matches-replay.html">
											<svg role="img" className="df-icon df-icon--match-replay">
												{/* <use xlink:href="img/necromancers.svg#match-replay"/> */}
											</svg>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</li>
					<li className="top-bar-carousel__item x2018">
						<div className="match-score-inline">
							<div className="match-score-inline__body">
								<div className="match-score-inline__body-inner">
									<figure className="match-team" role="group">
										<figure className="match-team-logo match-team-logo--team-5" role="group">
											<img src="img/samples/logo-eagles-30.png" srcset="img/samples/logo-eagles-30@2x.png 2x" alt="FEG Logo" />
										</figure>
										<figcaption>
											<div className="match-team__name">FEG</div>
												<div className="match-team__country ">FRA</div>
										</figcaption>
									</figure>
									<div className="match-result match-result--winner-right">
										<span className="match-result__score">4</span>
									</div>
									<div className="match-result">
										<span className="match-result__label">Final</span>
									</div>
								</div>
								<div className="match-score-inline__body-inner">
									<figure className="match-team" role="group">
										<figure className="match-team-logo match-team-logo--team-1" role="group">
											<img src="img/samples/logo-necromancers-30.png" srcset="img/samples/logo-necromancers-30@2x.png 2x" alt="NCR Logo" />
										</figure>
										<figcaption>
											<div className="match-team__name">NCR</div>
												<div className="match-team__country ">USA</div>
										</figcaption>
									</figure>
									<div className="match-result">
										<span className="match-result__score">3</span>
									</div>
									<div className="match-result">
										<span className="match-result__label">01/09</span>
									</div>
								</div>
							</div>
							<div className="match-score-inline__footer">
								<ul className="match-stats-links">
									<li>
										<a href="matches-overview-1.html">
											<svg role="img" className="df-icon df-icon--match-overview">
												{/* <use xlink:href="img/necromancers.svg#match-overview"/> */}
											</svg>
										</a>
									</li>
									<li>
										<a href="matches-stats-1.html">
											<svg role="img" className="df-icon df-icon--match-stats">
												{/* <use xlink:href="img/necromancers.svg#match-stats"/> */}
											</svg>
										</a>
									</li>
									<li>
										<a href="matches-lineups-1.html">
											<svg role="img" className="df-icon df-icon--match-lineups">
												{/* <use xlink:href="img/necromancers.svg#match-lineups"/> */}
											</svg>
										</a>
									</li>
									<li>
										<a href="matches-replay.html">
											<svg role="img" className="df-icon df-icon--match-replay">
												{/* <use xlink:href="img/necromancers.svg#match-replay"/> */}
											</svg>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</li>
					<li className="top-bar-carousel__item x2018">
						<div className="match-score-inline">
							<div className="match-score-inline__body">
								<div className="match-score-inline__body-inner">
									<figure className="match-team" role="group">
										<figure className="match-team-logo match-team-logo--team-1" role="group">
											<img src="img/samples/logo-necromancers-30.png" srcset="img/samples/logo-necromancers-30@2x.png 2x" alt="NCR Logo" />
										</figure>
										<figcaption>
											<div className="match-team__name">NCR</div>
												<div className="match-team__country ">USA</div>
										</figcaption>
									</figure>
									<div className="match-result">
										<span className="match-result__score">1</span>
									</div>
									<div className="match-result">
										<span className="match-result__label">Final</span>
									</div>
								</div>
								<div className="match-score-inline__body-inner">
									<figure className="match-team" role="group">
										<figure className="match-team-logo match-team-logo--team-3" role="group">
											<img src="img/samples/logo-bulls-30.png" srcset="img/samples/logo-bulls-30@2x.png 2x" alt="AGB Logo" />
										</figure>
										<figcaption>
											<div className="match-team__name">AGB</div>
												<div className="match-team__country ">SPA</div>
										</figcaption>
									</figure>
									<div className="match-result match-result--winner-right">
										<span className="match-result__score">3</span>
									</div>
									<div className="match-result">
										<span className="match-result__label">01/05</span>
									</div>
								</div>
							</div>
							<div className="match-score-inline__footer">
								<ul className="match-stats-links">
									<li>
										<a href="matches-overview-1.html">
											<svg role="img" className="df-icon df-icon--match-overview">
												{/* <use xlink:href="img/necromancers.svg#match-overview"/> */}
											</svg>
										</a>
									</li>
									<li>
										<a href="matches-stats-1.html">
											<svg role="img" className="df-icon df-icon--match-stats">
												{/* <use xlink:href="img/necromancers.svg#match-stats"/> */}
											</svg>
										</a>
									</li>
									<li>
										<a href="matches-lineups-1.html">
											<svg role="img" className="df-icon df-icon--match-lineups">
												{/* <use xlink:href="img/necromancers.svg#match-lineups"/> */}
											</svg>
										</a>
									</li>
									<li>
										<a href="matches-replay.html">
											<svg role="img" className="df-icon df-icon--match-replay">
												{/* <use xlink:href="img/necromancers.svg#match-replay"/> */}
											</svg>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</li>
					<li className="top-bar-carousel__item x2018">
						<div className="match-score-inline">
							<div className="match-score-inline__body">
								<div className="match-score-inline__body-inner">
									<figure className="match-team" role="group">
										<figure className="match-team-logo match-team-logo--team-4" role="group">
											<img src="img/samples/logo-panthers-30.png" srcset="img/samples/logo-panthers-30@2x.png 2x" alt="ICP Logo" />
										</figure>
										<figcaption>
											<div className="match-team__name">ICP</div>
												<div className="match-team__country ">POR</div>
										</figcaption>
									</figure>
									<div className="match-result">
										<span className="match-result__score">0</span>
									</div>
									<div className="match-result">
										<span className="match-result__label">Final</span>
									</div>
								</div>
								<div className="match-score-inline__body-inner">
									<figure className="match-team" role="group">
										<figure className="match-team-logo match-team-logo--team-1" role="group">
											<img src="img/samples/logo-necromancers-30.png" srcset="img/samples/logo-necromancers-30@2x.png 2x" alt="NCR Logo" />
										</figure>
										<figcaption>
											<div className="match-team__name">NCR</div>
												<div className="match-team__country ">USA</div>
										</figcaption>
									</figure>
									<div className="match-result match-result--winner-right">
										<span className="match-result__score">5</span>
									</div>
									<div className="match-result">
										<span className="match-result__label">01/02</span>
									</div>
								</div>
							</div>
							<div className="match-score-inline__footer">
								<ul className="match-stats-links">
									<li>
										<a href="matches-overview-1.html">
											<svg role="img" className="df-icon df-icon--match-overview">
												{/* <use xlink:href="img/necromancers.svg#match-overview"/> */}
											</svg>
										</a>
									</li>
									<li>
										<a href="matches-stats-1.html">
											<svg role="img" className="df-icon df-icon--match-stats">
												{/* <use xlink:href="img/necromancers.svg#match-stats"/> */}
											</svg>
										</a>
									</li>
									<li>
										<a href="matches-lineups-1.html">
											<svg role="img" className="df-icon df-icon--match-lineups">
												{/* <use xlink:href="img/necromancers.svg#match-lineups"/> */}
											</svg>
										</a>
									</li>
									<li>
										<a href="matches-replay.html">
											<svg role="img" className="df-icon df-icon--match-replay">
												{/* <use xlink:href="img/necromancers.svg#match-replay"/> */}
											</svg>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</li>
		
		
					<li className="top-bar-carousel__headline xwleague">
						<span>Xenowatch West League</span>
					</li>
					<li className="top-bar-carousel__item xwleague">
						<div className="match-score-inline">
							<div className="match-score-inline__body">
								<div className="match-score-inline__body-inner">
									<figure className="match-team" role="group">
										<figure className="match-team-logo match-team-logo--team-1" role="group">
											<img src="img/samples/logo-necromancers-30.png" srcset="img/samples/logo-necromancers-30@2x.png 2x" alt="NCR Logo" />
										</figure>
										<figcaption>
											<div className="match-team__name">NCR</div>
												<div className="match-team__country ">USA</div>
										</figcaption>
									</figure>
									<div className="match-result match-result--winner-right">
										<span className="match-result__score">1</span>
									</div>
									<div className="match-result match-result--live">
										<span className="match-result__label">12:33</span>
									</div>
								</div>
								<div className="match-score-inline__body-inner">
									<figure className="match-team" role="group">
										<figure className="match-team-logo match-team-logo--team-2" role="group">
											<img src="img/samples/logo-rhinos-30.png" srcset="img/samples/logo-rhinos-30@2x.png 2x" alt="RRH Logo" />
										</figure>
										<figcaption>
											<div className="match-team__name">RRH</div>
												<div className="match-team__country ">JPN</div>
										</figcaption>
									</figure>
									<div className="match-result">
										<span className="match-result__score">0</span>
									</div>
									<div className="match-result">
										<span className="match-result__label">01/12</span>
									</div>
								</div>
							</div>
							<div className="match-score-inline__footer">
								<ul className="match-stats-links">
									<li>
										<a href="matches-overview-1.html">
											<svg role="img" className="df-icon df-icon--match-overview">
												{/* <use xlink:href="img/necromancers.svg#match-overview"/> */}
											</svg>
										</a>
									</li>
									<li>
										<a href="matches-stats-1.html">
											<svg role="img" className="df-icon df-icon--match-stats">
												{/* <use xlink:href="img/necromancers.svg#match-stats"/> */}
											</svg>
										</a>
									</li>
									<li>
										<a href="matches-lineups-1.html">
											<svg role="img" className="df-icon df-icon--match-lineups">
												{/* <use xlink:href="img/necromancers.svg#match-lineups"/> */}
											</svg>
										</a>
									</li>
									<li>
										<a href="matches-replay.html">
											<svg role="img" className="df-icon df-icon--match-replay">
												{/* <use xlink:href="img/necromancers.svg#match-replay"/> */}
											</svg>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</li>
					<li className="top-bar-carousel__item xwleague">
						<div className="match-score-inline">
							<div className="match-score-inline__body">
								<div className="match-score-inline__body-inner">
									<figure className="match-team" role="group">
										<figure className="match-team-logo match-team-logo--team-4" role="group">
											<img src="img/samples/logo-panthers-30.png" srcset="img/samples/logo-panthers-30@2x.png 2x" alt="ICP Logo" />
										</figure>
										<figcaption>
											<div className="match-team__name">ICP</div>
												<div className="match-team__country ">POR</div>
										</figcaption>
									</figure>
									<div className="match-result">
										<span className="match-result__score">0</span>
									</div>
									<div className="match-result">
										<span className="match-result__label">Final</span>
									</div>
								</div>
								<div className="match-score-inline__body-inner">
									<figure className="match-team" role="group">
										<figure className="match-team-logo match-team-logo--team-1" role="group">
											<img src="img/samples/logo-necromancers-30.png" srcset="img/samples/logo-necromancers-30@2x.png 2x" alt="NCR Logo" />
										</figure>
										<figcaption>
											<div className="match-team__name">NCR</div>
												<div className="match-team__country ">USA</div>
										</figcaption>
									</figure>
									<div className="match-result match-result--winner-right">
										<span className="match-result__score">3</span>
									</div>
									<div className="match-result">
										<span className="match-result__label">01/07</span>
									</div>
								</div>
							</div>
							<div className="match-score-inline__footer">
								<ul className="match-stats-links">
									<li>
										<a href="matches-overview-1.html">
											<svg role="img" className="df-icon df-icon--match-overview">
												{/* <use xlink:href="img/necromancers.svg#match-overview"/> */}
											</svg>
										</a>
									</li>
									<li>
										<a href="matches-stats-1.html">
											<svg role="img" className="df-icon df-icon--match-stats">
												{/* <use xlink:href="img/necromancers.svg#match-stats"/> */}
											</svg>
										</a>
									</li>
									<li>
										<a href="matches-lineups-1.html">
											<svg role="img" className="df-icon df-icon--match-lineups">
												{/* <use xlink:href="img/necromancers.svg#match-lineups"/> */}
											</svg>
										</a>
									</li>
									<li>
										<a href="matches-replay.html">
											<svg role="img" className="df-icon df-icon--match-replay">
												{/* <use xlink:href="img/necromancers.svg#match-replay"/> */}
											</svg>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</li>
					<li className="top-bar-carousel__item xwleague">
						<div className="match-score-inline">
							<div className="match-score-inline__body">
								<div className="match-score-inline__body-inner">
									<figure className="match-team" role="group">
										<figure className="match-team-logo match-team-logo--team-5" role="group">
											<img src="img/samples/logo-eagles-30.png" srcset="img/samples/logo-eagles-30@2x.png 2x" alt="FEG Logo" />
										</figure>
										<figcaption>
											<div className="match-team__name">FEG</div>
												<div className="match-team__country ">FRA</div>
										</figcaption>
									</figure>
									<div className="match-result match-result--winner-right">
										<span className="match-result__score">5</span>
									</div>
									<div className="match-result">
										<span className="match-result__label">Final</span>
									</div>
								</div>
								<div className="match-score-inline__body-inner">
									<figure className="match-team" role="group">
										<figure className="match-team-logo match-team-logo--team-1" role="group">
											<img src="img/samples/logo-necromancers-30.png" srcset="img/samples/logo-necromancers-30@2x.png 2x" alt="NCR Logo" />
										</figure>
										<figcaption>
											<div className="match-team__name">NCR</div>
												<div className="match-team__country ">USA</div>
										</figcaption>
									</figure>
									<div className="match-result">
										<span className="match-result__score">2</span>
									</div>
									<div className="match-result">
										<span className="match-result__label">01/04</span>
									</div>
								</div>
							</div>
							<div className="match-score-inline__footer">
								<ul className="match-stats-links">
									<li>
										<a href="matches-overview-1.html">
											<svg role="img" className="df-icon df-icon--match-overview">
												{/* <use xlink:href="img/necromancers.svg#match-overview"/> */}
											</svg>
										</a>
									</li>
									<li>
										<a href="matches-stats-1.html">
											<svg role="img" className="df-icon df-icon--match-stats">
												{/* <use xlink:href="img/necromancers.svg#match-stats"/> */}
											</svg>
										</a>
									</li>
									<li>
										<a href="matches-lineups-1.html">
											<svg role="img" className="df-icon df-icon--match-lineups">
												{/* <use xlink:href="img/necromancers.svg#match-lineups"/> */}
											</svg>
										</a>
									</li>
									<li>
										<a href="matches-replay.html">
											<svg role="img" className="df-icon df-icon--match-replay">
												{/* <use xlink:href="img/necromancers.svg#match-replay"/> */}
											</svg>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</li>
					<li className="top-bar-carousel__item xwleague">
						<div className="match-score-inline">
							<div className="match-score-inline__body">
								<div className="match-score-inline__body-inner">
									<figure className="match-team" role="group">
										<figure className="match-team-logo match-team-logo--team-1" role="group">
											<img src="img/samples/logo-necromancers-30.png" srcset="img/samples/logo-necromancers-30@2x.png 2x" alt="NCR Logo" />
										</figure>
										<figcaption>
											<div className="match-team__name">NCR</div>
												<div className="match-team__country ">USA</div>
										</figcaption>
									</figure>
									<div className="match-result">
										<span className="match-result__score">1</span>
									</div>
									<div className="match-result">
										<span className="match-result__label">Final</span>
									</div>
								</div>
								<div className="match-score-inline__body-inner">
									<figure className="match-team" role="group">
										<figure className="match-team-logo match-team-logo--team-3" role="group">
											<img src="img/samples/logo-bulls-30.png" srcset="img/samples/logo-bulls-30@2x.png 2x" alt="AGB Logo" />
										</figure>
										<figcaption>
											<div className="match-team__name">AGB</div>
												<div className="match-team__country ">SPA</div>
										</figcaption>
									</figure>
									<div className="match-result match-result--winner-right">
										<span className="match-result__score">3</span>
									</div>
									<div className="match-result">
										<span className="match-result__label">01/03</span>
									</div>
								</div>
							</div>
							<div className="match-score-inline__footer">
								<ul className="match-stats-links">
									<li>
										<a href="matches-overview-1.html">
											<svg role="img" className="df-icon df-icon--match-overview">
												{/* <use xlink:href="img/necromancers.svg#match-overview"/> */}
											</svg>
										</a>
									</li>
									<li>
										<a href="matches-stats-1.html">
											<svg role="img" className="df-icon df-icon--match-stats">
												{/* <use xlink:href="img/necromancers.svg#match-stats"/> */}
											</svg>
										</a>
									</li>
									<li>
										<a href="matches-lineups-1.html">
											<svg role="img" className="df-icon df-icon--match-lineups">
												{/* <use xlink:href="img/necromancers.svg#match-lineups"/> */}
											</svg>
										</a>
									</li>
									<li>
										<a href="matches-replay.html">
											<svg role="img" className="df-icon df-icon--match-replay">
												{/* <use xlink:href="img/necromancers.svg#match-replay"/> */}
											</svg>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</li>
		
		
					<li className="top-bar-carousel__headline xeleague">
						<span>Xenowatch East League</span>
					</li>
					<li className="top-bar-carousel__item xeleague">
						<div className="match-score-inline">
							<div className="match-score-inline__body">
								<div className="match-score-inline__body-inner">
									<figure className="match-team" role="group">
										<figure className="match-team-logo match-team-logo--team-1" role="group">
											<img src="img/samples/logo-necromancers-30.png" srcset="img/samples/logo-necromancers-30@2x.png 2x" alt="NCR Logo" />
										</figure>
										<figcaption>
											<div className="match-team__name">NCR</div>
												<div className="match-team__country ">USA</div>
										</figcaption>
									</figure>
									<div className="match-result match-result--winner-right">
										<span className="match-result__score">4</span>
									</div>
									<div className="match-result">
										<span className="match-result__label">Final</span>
									</div>
								</div>
								<div className="match-score-inline__body-inner">
									<figure className="match-team" role="group">
										<figure className="match-team-logo match-team-logo--team-2" role="group">
											<img src="img/samples/logo-rhinos-30.png" srcset="img/samples/logo-rhinos-30@2x.png 2x" alt="RRH Logo" />
										</figure>
										<figcaption>
											<div className="match-team__name">RRH</div>
												<div className="match-team__country ">JPN</div>
										</figcaption>
									</figure>
									<div className="match-result">
										<span className="match-result__score">1</span>
									</div>
									<div className="match-result">
										<span className="match-result__label">12/18</span>
									</div>
								</div>
							</div>
							<div className="match-score-inline__footer">
								<ul className="match-stats-links">
									<li>
										<a href="matches-overview-1.html">
											<svg role="img" className="df-icon df-icon--match-overview">
												{/* <use xlink:href="img/necromancers.svg#match-overview"/> */}
											</svg>
										</a>
									</li>
									<li>
										<a href="matches-stats-1.html">
											<svg role="img" className="df-icon df-icon--match-stats">
												{/* <use xlink:href="img/necromancers.svg#match-stats"/> */}
											</svg>
										</a>
									</li>
									<li>
										<a href="matches-lineups-1.html">
											<svg role="img" className="df-icon df-icon--match-lineups">
												{/* <use xlink:href="img/necromancers.svg#match-lineups"/> */}
											</svg>
										</a>
									</li>
									<li>
										<a href="matches-replay.html">
											<svg role="img" className="df-icon df-icon--match-replay">
												{/* <use xlink:href="img/necromancers.svg#match-replay"/> */}
											</svg>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</li>
					<li className="top-bar-carousel__item xeleague">
						<div className="match-score-inline">
							<div className="match-score-inline__body">
								<div className="match-score-inline__body-inner">
									<figure className="match-team" role="group">
										<figure className="match-team-logo match-team-logo--team-1" role="group">
											<img src="img/samples/logo-necromancers-30.png" srcset="img/samples/logo-necromancers-30@2x.png 2x" alt="NCR Logo" />
										</figure>
										<figcaption>
											<div className="match-team__name">NCR</div>
												<div className="match-team__country ">USA</div>
										</figcaption>
									</figure>
									<div className="match-result match-result--winner-right">
										<span className="match-result__score">4</span>
									</div>
									<div className="match-result">
										<span className="match-result__label">Final</span>
									</div>
								</div>
								<div className="match-score-inline__body-inner">
									<figure className="match-team" role="group">
										<figure className="match-team-logo match-team-logo--team-3" role="group">
											<img src="img/samples/logo-bulls-30.png" srcset="img/samples/logo-bulls-30@2x.png 2x" alt="AGB Logo" />
										</figure>
										<figcaption>
											<div className="match-team__name">AGB</div>
												<div className="match-team__country ">SPA</div>
										</figcaption>
									</figure>
									<div className="match-result">
										<span className="match-result__score">3</span>
									</div>
									<div className="match-result">
										<span className="match-result__label">12/11</span>
									</div>
								</div>
							</div>
							<div className="match-score-inline__footer">
								<ul className="match-stats-links">
									<li>
										<a href="matches-overview-1.html">
											<svg role="img" className="df-icon df-icon--match-overview">
												{/* <use xlink:href="img/necromancers.svg#match-overview"/> */}
											</svg>
										</a>
									</li>
									<li>
										<a href="matches-stats-1.html">
											<svg role="img" className="df-icon df-icon--match-stats">
												{/* <use xlink:href="img/necromancers.svg#match-stats"/> */}
											</svg>
										</a>
									</li>
									<li>
										<a href="matches-lineups-1.html">
											<svg role="img" className="df-icon df-icon--match-lineups">
												{/* <use xlink:href="img/necromancers.svg#match-lineups"/> */}
											</svg>
										</a>
									</li>
									<li>
										<a href="matches-replay.html">
											<svg role="img" className="df-icon df-icon--match-replay">
												{/* <use xlink:href="img/necromancers.svg#match-replay"/> */}
											</svg>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</li>
					<li className="top-bar-carousel__item xeleague">
						<div className="match-score-inline">
							<div className="match-score-inline__body">
								<div className="match-score-inline__body-inner">
									<figure className="match-team" role="group">
										<figure className="match-team-logo match-team-logo--team-4" role="group">
											<img src="img/samples/logo-panthers-30.png" srcset="img/samples/logo-panthers-30@2x.png 2x" alt="ICP Logo" />
										</figure>
										<figcaption>
											<div className="match-team__name">ICP</div>
												<div className="match-team__country ">POR</div>
										</figcaption>
									</figure>
									<div className="match-result">
										<span className="match-result__score">0</span>
									</div>
									<div className="match-result">
										<span className="match-result__label">Final</span>
									</div>
								</div>
								<div className="match-score-inline__body-inner">
									<figure className="match-team" role="group">
										<figure className="match-team-logo match-team-logo--team-1" role="group">
											<img src="img/samples/logo-necromancers-30.png" srcset="img/samples/logo-necromancers-30@2x.png 2x" alt="NCR Logo" />
										</figure>
										<figcaption>
											<div className="match-team__name">NCR</div>
												<div className="match-team__country ">USA</div>
										</figcaption>
									</figure>
									<div className="match-result match-result--winner-right">
										<span className="match-result__score">2</span>
									</div>
									<div className="match-result">
										<span className="match-result__label">12/09</span>
									</div>
								</div>
							</div>
							<div className="match-score-inline__footer">
								<ul className="match-stats-links">
									<li>
										<a href="matches-overview-1.html">
											<svg role="img" className="df-icon df-icon--match-overview">
												{/* <use xlink:href="img/necromancers.svg#match-overview"/> */}
											</svg>
										</a>
									</li>
									<li>
										<a href="matches-stats-1.html">
											<svg role="img" className="df-icon df-icon--match-stats">
												{/* <use xlink:href="img/necromancers.svg#match-stats"/> */}
											</svg>
										</a>
									</li>
									<li>
										<a href="matches-lineups-1.html">
											<svg role="img" className="df-icon df-icon--match-lineups">
												{/* <use xlink:href="img/necromancers.svg#match-lineups"/> */}
											</svg>
										</a>
									</li>
									<li>
										<a href="matches-replay.html">
											<svg role="img" className="df-icon df-icon--match-replay">
												{/* <use xlink:href="img/necromancers.svg#match-replay"/> */}
											</svg>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</li>
		
		
					<li className="top-bar-carousel__headline xusacup">
						<span>Xenowatch USA Cup</span>
					</li>
					<li className="top-bar-carousel__item xusacup">
						<div className="match-score-inline">
							<div className="match-score-inline__body">
								<div className="match-score-inline__body-inner">
									<figure className="match-team" role="group">
										<figure className="match-team-logo match-team-logo--team-1" role="group">
											<img src="img/samples/logo-necromancers-30.png" srcset="img/samples/logo-necromancers-30@2x.png 2x" alt="NCR Logo" />
										</figure>
										<figcaption>
											<div className="match-team__name">NCR</div>
												<div className="match-team__country ">USA</div>
										</figcaption>
									</figure>
									<div className="match-result">
										<span className="match-result__score">1</span>
									</div>
									<div className="match-result">
										<span className="match-result__label">Final</span>
									</div>
								</div>
								<div className="match-score-inline__body-inner">
									<figure className="match-team" role="group">
										<figure className="match-team-logo match-team-logo--team-3" role="group">
											<img src="img/samples/logo-bulls-30.png" srcset="img/samples/logo-bulls-30@2x.png 2x" alt="AGB Logo" />
										</figure>
										<figcaption>
											<div className="match-team__name">AGB</div>
												<div className="match-team__country ">SPA</div>
										</figcaption>
									</figure>
									<div className="match-result match-result--winner-right">
										<span className="match-result__score">3</span>
									</div>
									<div className="match-result">
										<span className="match-result__label">11/17</span>
									</div>
								</div>
							</div>
							<div className="match-score-inline__footer">
								<ul className="match-stats-links">
									<li>
										<a href="matches-overview-1.html">
											<svg role="img" className="df-icon df-icon--match-overview">
												{/* <use xlink:href="img/necromancers.svg#match-overview"/> */}
											</svg>
										</a>
									</li>
									<li>
										<a href="matches-stats-1.html">
											<svg role="img" className="df-icon df-icon--match-stats">
												{/* <use xlink:href="img/necromancers.svg#match-stats"/> */}
											</svg>
										</a>
									</li>
									<li>
										<a href="matches-lineups-1.html">
											<svg role="img" className="df-icon df-icon--match-lineups">
												{/* <use xlink:href="img/necromancers.svg#match-lineups"/> */}
											</svg>
										</a>
									</li>
									<li>
										<a href="matches-replay.html">
											<svg role="img" className="df-icon df-icon--match-replay">
												{/* <use xlink:href="img/necromancers.svg#match-replay"/> */}
											</svg>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</li>
					<li className="top-bar-carousel__item xusacup">
						<div className="match-score-inline">
							<div className="match-score-inline__body">
								<div className="match-score-inline__body-inner">
									<figure className="match-team" role="group">
										<figure className="match-team-logo match-team-logo--team-5" role="group">
											<img src="img/samples/logo-eagles-30.png" srcset="img/samples/logo-eagles-30@2x.png 2x" alt="FEG Logo" />
										</figure>
										<figcaption>
											<div className="match-team__name">FEG</div>
												<div className="match-team__country ">FRA</div>
										</figcaption>
									</figure>
									<div className="match-result match-result--winner-right">
										<span className="match-result__score">2</span>
									</div>
									<div className="match-result">
										<span className="match-result__label">Final</span>
									</div>
								</div>
								<div className="match-score-inline__body-inner">
									<figure className="match-team" role="group">
										<figure className="match-team-logo match-team-logo--team-1" role="group">
											<img src="img/samples/logo-necromancers-30.png" srcset="img/samples/logo-necromancers-30@2x.png 2x" alt="NCR Logo" />
										</figure>
										<figcaption>
											<div className="match-team__name">NCR</div>
												<div className="match-team__country ">USA</div>
										</figcaption>
									</figure>
									<div className="match-result">
										<span className="match-result__score">1</span>
									</div>
									<div className="match-result">
										<span className="match-result__label">11/11</span>
									</div>
								</div>
							</div>
							<div className="match-score-inline__footer">
								<ul className="match-stats-links">
									<li>
										<a href="matches-overview-1.html">
											<svg role="img" className="df-icon df-icon--match-overview">
												{/* <use xlink:href="img/necromancers.svg#match-overview"/> */}
											</svg>
										</a>
									</li>
									<li>
										<a href="matches-stats-1.html">
											<svg role="img" className="df-icon df-icon--match-stats">
												{/* <use xlink:href="img/necromancers.svg#match-stats"/> */}
											</svg>
										</a>
									</li>
									<li>
										<a href="matches-lineups-1.html">
											<svg role="img" className="df-icon df-icon--match-lineups">
												{/* <use xlink:href="img/necromancers.svg#match-lineups"/> */}
											</svg>
										</a>
									</li>
									<li>
										<a href="matches-replay.html">
											<svg role="img" className="df-icon df-icon--match-replay">
												{/* <use xlink:href="img/necromancers.svg#match-replay"/> */}
											</svg>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</li>
					<li className="top-bar-carousel__item xusacup">
						<div className="match-score-inline">
							<div className="match-score-inline__body">
								<div className="match-score-inline__body-inner">
									<figure className="match-team" role="group">
										<figure className="match-team-logo match-team-logo--team-4" role="group">
											<img src="img/samples/logo-panthers-30.png" srcset="img/samples/logo-panthers-30@2x.png 2x" alt="ICP Logo" />
										</figure>
										<figcaption>
											<div className="match-team__name">ICP</div>
												<div className="match-team__country ">POR</div>
										</figcaption>
									</figure>
									<div className="match-result match-result--winner-right">
										<span className="match-result__score">3</span>
									</div>
									<div className="match-result">
										<span className="match-result__label">Final</span>
									</div>
								</div>
								<div className="match-score-inline__body-inner">
									<figure className="match-team" role="group">
										<figure className="match-team-logo match-team-logo--team-1" role="group">
											<img src="img/samples/logo-necromancers-30.png" srcset="img/samples/logo-necromancers-30@2x.png 2x" alt="NCR Logo" />
										</figure>
										<figcaption>
											<div className="match-team__name">NCR</div>
												<div className="match-team__country ">USA</div>
										</figcaption>
									</figure>
									<div className="match-result">
										<span className="match-result__score">2</span>
									</div>
									<div className="match-result">
										<span className="match-result__label">11/06</span>
									</div>
								</div>
							</div>
							<div className="match-score-inline__footer">
								<ul className="match-stats-links">
									<li>
										<a href="matches-overview-1.html">
											<svg role="img" className="df-icon df-icon--match-overview">
												{/* <use xlink:href="img/necromancers.svg#match-overview"/> */}
											</svg>
										</a>
									</li>
									<li>
										<a href="matches-stats-1.html">
											<svg role="img" className="df-icon df-icon--match-stats">
												{/* <use xlink:href="img/necromancers.svg#match-stats"/> */}
											</svg>
										</a>
									</li>
									<li>
										<a href="matches-lineups-1.html">
											<svg role="img" className="df-icon df-icon--match-lineups">
												{/* <use xlink:href="img/necromancers.svg#match-lineups"/> */}
											</svg>
										</a>
									</li>
									<li>
										<a href="matches-replay.html">
											<svg role="img" className="df-icon df-icon--match-replay">
												{/* <use xlink:href="img/necromancers.svg#match-replay"/> */}
											</svg>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<div className="menu-panel__content d-none d-md-flex">
				<div className="menu-panel__navigation">
					<div id="dl-menu" className="dl-menuwrapper">
						{/* <!-- <button className="dl-trigger">Open Menu</button> --> */}
						<ul className="dl-menu dl-menuopen">
							<li className="active">
								<a href="home.html">Home</a>
							</li>
							<li className="">
								<a href="team-selection-2.html">Teams</a>
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
							<li className=""><a href="#">Matches</a>
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
								<a href="blog-1.html">News</a>
							</li>
							<li>
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
							</li>
							<li className="">
								<a href="shop.html">Shop</a>
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
								<h5 className="widget__title">Join our team</h5>
								<div className="widget__content">
									<p>
										We’re always looking for new talent to join our teams. If you wanna join us, just send us and email and we’ll get back to you!
									</p>
									<div className="info-box">
										<div className="info-box__label">Max Parker - Recruiter</div>
										<div className="info-box__content"><a href="mailto:#">mp-recruit<span className="color-primary">@</span>necromancers.com</a></div>
									</div>
									<div className="info-box">
										<div className="info-box__label">Be our partner!</div>
										<div className="info-box__content"><a href="mailto:#">partners<span className="color-primary">@</span>necromancers.com</a></div>
									</div>
								</div>
							</section>
						</div>
						<div className="col-md-12 col-lg-6 col-xl-5 offset-xl-2 mt-5 mt-lg-0">
							<section className="widget widget-contact-info">
								<h5 className="widget__title">Contact Info</h5>
								<div className="widget__content">
									<p>
										If you have any questions, just send us and email and don’t forget to follow and like all our social accounts to keep updated!
									</p>
									<div className="info-box">
										<div className="info-box__label">General inquiries</div>
										<div className="info-box__content"><a href="mailto:#">inquiries<span className="color-primary">@</span>necromancers.com</a></div>
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
								<h5 className="widget__title">Our Partners</h5>
								<div className="widget__content">
									<ul>
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
									</ul>
								</div>
							</section>
						</div>
					</div>
				</div>
			</div>
	</div>
  </div>
  )
}

export default HomeComponent;
