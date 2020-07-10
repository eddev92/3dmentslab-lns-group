import React, { useState } from 'react';
import MenuComponent from '../shared/menu';
import MenuPanelComponent from '../shared/menu/panel';

const AboutUsComponent = () => {
  const bodyAux = document.querySelectorAll("#main-body")
  const bodyRoot = document.querySelectorAll("#root")
  const [openMenu, setOpenMenu] = useState(false);
  console.log(bodyAux)
  if (bodyAux && bodyAux[0]) {
    console.log(bodyAux)
    bodyAux[0].classList.remove("site-layout--horizontal");
    bodyAux[0].classList.add("scroll-is--active")
    bodyAux[0].classList.add("cursor-is--active")
    // site-layout--horizontal cursor-is--active scroll-is--active
  }
  if (bodyRoot && bodyRoot[0]) {
    console.log(bodyRoot)
    bodyRoot[0].classList.add("site-layout--default")
  }
  const handleClick = () => {
    console.log("menu open")
    setOpenMenu(!openMenu)
}
  return (
    // <div>
      <main class="site-content" id="wrapper">
    <MenuComponent handleClick={handleClick} openMenu={openMenu}  />
        <div class="site-content__inner">
          <div class="site-content__holder">
            <figure class="page-thumbnail page-thumbnail--default">
              <img class="page-bg-logo" src="assets/img/samples/page-bg-logo.png" alt="" />

              <div class="ncr-page-decor">
                <div class="ncr-page-decor__layer-1">
                  <div class="ncr-page-decor__layer-bg"></div>
                </div>
                <div class="ncr-page-decor__layer-2"></div>
                <div class="ncr-page-decor__layer-3">
                  <div class="ncr-page-decor__layer-bg"></div>
                </div>
                <div class="ncr-page-decor__layer-4"></div>
                <div class="ncr-page-decor__layer-5"></div>
                <div class="ncr-page-decor__layer-6"></div>
              </div>

            </figure>
            <h1 class="page-title h3">NOSOTROS</h1>
            <div class="page-content">
              <p>
                Somos un grupo inversionistas conformado por diversas marcas asociadas en diversos rubros. 
              </p>
              <div class="spacer"></div>
              <div class="world-map">
                <div class="world-map-team world-map-team--left world-map-team--one">
                  <figure role="group">
                    <figure class="world-map-team__logo" role="group">
                      <img src="img/samples/logo-necromancers-32.png" srcset="assets/img/samples/logo-necromancers-32@2x.png 2x" alt="Necromancers Logo" />
                    </figure>
                    <figcaption>
                      <div class="world-map-team__name">Oficina Principal</div>
                        <div class="world-map-team__country">Peru, Lima</div>
                    </figcaption>
                  </figure>
                  <div class="world-map-team__anchor"></div>
                </div>
                {/* <div class="world-map-team world-map-team--right world-map-team--two">
                  <figure role="group">
                    <figure class="world-map-team__logo" role="group">
                      <img src="assets/img/samples/logo-necromancers-32.png" srcset="assets/img/samples/logo-necromancers-32@2x.png 2x" alt="Necromancers Logo" />
                    </figure>
                    <figcaption>
                      <div class="world-map-team__name">Necromancers</div>
                        <div class="world-map-team__country">Australia (Soon!)</div>
                    </figcaption>
                  </figure>
                  <div class="world-map-team__anchor"></div>
                </div> */}
              </div>
              <div class="spacer"></div>
              <h4>MISIÓN & VISIÓN</h4>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo lorem inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.
              </p>
              <div class="spacer"></div>
              <h4>PORQUÉ NOSOTROS?</h4>
              <div class="spacer"></div>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo lorem inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.
              </p>
              <div class="spacer"></div>
              <div class="row">
                <div class="col-md-4 mb-4 mb-md-0">
                  <div class="counter">
                    <div class="counter__icon counter__icon--left">
                      <svg role="img" class="df-icon df-icon--joystick">
                        {/* <use xlink:href="assets/img/necromancers.svg#joystick"/> */}
                      </svg>
                    </div>
                    <div class="counter__number">979</div>
                    <div class="counter__label">Matches</div>
                  </div>
                </div>
                <div class="col-md-4 mb-4 mb-md-0">
                  <div class="counter">
                    <div class="counter__icon counter__icon--left">
                      <svg role="img" class="df-icon df-icon--trophy">
                        {/* <use xlink:href="assets/img/necromancers.svg#trophy"/> */}
                      </svg>
                    </div>
                    <div class="counter__number">34</div>
                    <div class="counter__label">Trophies</div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="counter">
                    <div class="counter__icon counter__icon--left">
                      <svg role="img" class="df-icon df-icon--chart">
                        {/* <use xlink:href="assets/img/necromancers.svg#chart"/> */}
                      </svg>
                    </div>
                    <div class="counter__number">82.1</div>
                    <div class="counter__label">Win Ratio</div>
                  </div>
                </div>
              </div>
              <div class="spacer"></div>
              <figure class="lightbox lightbox--video">
                <a href="https://www.youtube.com/watch?v&#x3D;XE0fU9PCrWE" class="mp_iframe">
                  <img src="assets/img/samples/features-about-us-img-01.jpg" alt="" />
                  {/* <span class="lightbox__icon">/span> */}
                </a>
              </figure>
              <h4>NUESTRO EQUIPO</h4>
              <div class="spacer"></div>
              <p>
                Contamos con expertos en diversas áreas para así poder enfrentarnos a las diferentes necesidades del mercado y/o consumidor y desarrollarlas con éxito.
              </p>
            </div>
          </div>
        </div>
      <MenuPanelComponent isActive={openMenu} />
      </main>
  )
}

export default AboutUsComponent
    