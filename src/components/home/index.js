import React, { useState } from 'react';
import MenuComponent from '../shared/menu';
import MenuPanelComponent from '../shared/menu/panel';
import HorizontalScroll from 'react-scroll-horizontal'

const HomeComponent = () => {
  const bodyAux = document.querySelectorAll("body")
  const [openMenu, setOpenMenu] = useState(false);
  console.log(bodyAux)
  if (bodyAux && bodyAux[0]) {
    console.log(bodyAux)
    bodyAux[0].classList.add("site-layout--horizontal")
    bodyAux[0].classList.add("scroll-is--active")
    // site-layout--horizontal cursor-is--active scroll-is--active
  }
  const handleClick = () => {
      console.log("menu open")
      setOpenMenu(!openMenu)
  }
  const parent  = { width: `100%`, height: `100%`}
  const child   = { width: `100%`, height: `100%`}
  return (
    <div className="site-wrapper" style={parent}>
    <MenuComponent handleClick={handleClick} openMenu={openMenu} />

    {/* <HorizontalScroll className="horizontalScroll--active"> */}
      <main className="site-content horizontalScroll--desactive" id="wrapper" style={child}>
        
        <div className="widget-area widger-area--before-loop">
          <div className="widget widget-carousel slick-slider">
            <article className="widget-carousel__item player bg-image bg--ph-03">
              <div className="player__subtitle h6">Welcome</div>
              <h1 className="player__title h3 color-primary">JULIE_NOIRE</h1>
              <div className="player__body">
                <div className="h5">To the <span className="color-primary">Xenovrese</span> team!</div>
              </div>
              {/* <div className="player__thumbnail">
                <img src="img/samples/team-info-page-player-photo-03.png" alt="" />
                <a href="team-player-3.html" className="more-info-link h6"><span className="add-icon"></span>More info</a>
              </div> */}
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


      {/* <div className="site-overlay"></div>

      <div className="search-panel">
        <div className="search-panel__content">
          <form action="#" id="header-search-form" className="search-form search-form--header">
            <input type="text" className="form-control" value="" placeholder="What are you looking for...?" />
          </form>
          <span>Write what you are looking for, choose the filters and press enter to begin your search!</span>
        </div>
      </div>
      <MenuPanelComponent isActive={openMenu} />
    </HorizontalScroll> */}


    <HorizontalScroll className="horizontalScroll--active">
      <main className="site-content" id="wrapper" style={child}>
        
        <div className="widget-area widger-area--before-loop">
          <div className="widget widget-carousel slick-slider">
            <article className="widget-carousel__item player bg-image bg--ph-03">
              <div className="player__subtitle h6">Bienvenido</div>
              <h1 className="player__title h3 color-primary">MÁS QUE UN GRUPO, UNA FAMILIA!</h1>
              <div className="player__body">
                <div className="h5">DIVERSOS SERVICIOS Y PRODUCTOS, <span className="color-primary">DESARROLLADOS</span> AL ALCANCE DE TODOS.</div>
              </div>
              {/* <div className="player__thumbnail">
                <img src="img/samples/team-info-page-player-photo-03.png" alt="" />
                <a href="team-player-3.html" className="more-info-link h6"><span className="add-icon"></span>More info</a>
              </div> */}
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

      {/* <div className="cart-panel">
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
      </div> */}

      <div className="search-panel">
        <div className="search-panel__content">
          <form action="#" id="header-search-form" className="search-form search-form--header">
            <input type="text" className="form-control" value="" placeholder="What are you looking for...?" />
          </form>
          <span>Write what you are looking for, choose the filters and press enter to begin your search!</span>
        </div>
      </div>
    </HorizontalScroll>
      <MenuPanelComponent isActive={openMenu} />
    </div>
  )
}

export default HomeComponent;
