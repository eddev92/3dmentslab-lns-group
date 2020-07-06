import React, { useState } from 'react';
import MenuComponent from '../shared/menu';
import MenuPanelComponent from '../shared/menu/panel';
import HorizontalScroll from 'react-scroll-horizontal'

const ShopComponent = () => {
  const bodyAux = document.querySelectorAll("#main-body")
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
  return (
    <div className="">
    <MenuComponent handleClick={handleClick} openMenu={openMenu}  />
    <HorizontalScroll className="horizontalScroll--active">
    <main className="site-content" id="wrapper">			
			<div className="widget-area widger-area--before-loop">
				<div className="widget widget-featured-product bg-image bg--ph-03">
					<div className="widget__subtitle">NUESTRA TIENDA</div>
					<h1 className="widget__title h2"><span className="color-primary">VARIEDAD DE PRODUCTOS,</span> para todos!</h1>
					<div className="widget__thumbnail">
						<img className="" src="assets/img/samples/widget-featured-product-img-01.png" alt="" />
						{/* <div className="widget__price">
							<a className="add-icon" href="shop-product.html"></a>
							<div className="widget__price-label">Get it for</div>
							<div className="widget__price-count">
								$<span className="color-primary">24.99</span>
							</div>
						</div> */}
					</div>
				</div>
			</div>
			<div className="content shop-layout--style-2">
			
					<div className="product">
						<a href="shop-product.html" className="product__thumbnail">
							<img src="assets/img/samples/product-img-01.png" alt="" />
							<div className="btn">Add to cart +</div>
						</a>
						<div className="product__body">
							<div className="product__header">
								<ul className="product__cats list-unstyled">
									<li className="product__cats-item">
										<a href="#">Framed prints</a>
									</li>
								</ul>
								<h2 className="product__title h4"><a href="shop-product.html">Magimons black framed print</a></h2>
								<ul className="product__meta list-unstyled">
									<li className="product__meta-item product__price">$38.00</li>
									<li className="product__meta-item product__ratings">
										<div className="fas star-rating">
											{/* <span style="width: 80%;">&nbsp;</span> */}
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="product">
						<a href="shop-product.html" className="product__thumbnail">
							<img src="assets/img/samples/product-img-02.png" alt="" />
							<div className="btn">Add to cart +</div>
						</a>
						<div className="product__body">
							<div className="product__header">
								<ul className="product__cats list-unstyled">
									<li className="product__cats-item">
										<a href="#">Coffee mugs</a>
									</li>
								</ul>
								<h2 className="product__title h4"><a href="shop-product.html">Necromancers ennamel mug</a></h2>
								<ul className="product__meta list-unstyled">
									<li className="product__meta-item product__price">$16.00</li>
									<li className="product__meta-item product__ratings">
										<div className="fas star-rating">
											{/* <span style="width: 60%;">&nbsp;</span> */}
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="product">
						<a href="shop-product.html" className="product__thumbnail">
							<img src="assets/img/samples/product-img-03.png" alt="" />
							<div className="btn">Add to cart +</div>
						</a>
						<div className="product__body">
							<div className="product__header">
								<ul className="product__cats list-unstyled">
									<li className="product__cats-item">
										<a href="#">Clothing</a>
									</li>
								</ul>
								<h2 className="product__title h4"><a href="shop-product.html">Necromancers women&#x27;s t-shirt</a></h2>
								<ul className="product__meta list-unstyled">
									<li className="product__meta-item product__price">$24.99</li>
									<li className="product__meta-item product__ratings">
										<div className="fas star-rating">
											{/* <span style="width: 100%;">&nbsp;</span> */}
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="product">
						<a href="shop-product.html" className="product__thumbnail">
							<img src="assets/img/samples/product-img-04.png" alt="" />
							<div className="btn">Add to cart +</div>
						</a>
						<div className="product__body">
							<div className="product__header">
								<ul className="product__cats list-unstyled">
									<li className="product__cats-item">
										<a href="#">Framed prints</a>
									</li>
								</ul>
								<h2 className="product__title h4"><a href="shop-product.html">Guardians white frame print</a></h2>
								<ul className="product__meta list-unstyled">
									<li className="product__meta-item product__price">$32.00</li>
									<li className="product__meta-item product__ratings">
										<div className="fas star-rating">
											{/* <span style="width: 80%;">&nbsp;</span> */}
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="product">
						<a href="shop-product.html" className="product__thumbnail">
							<img src="assets/img/samples/product-img-01.png" alt="" />
							<div className="btn">Add to cart +</div>
						</a>
						<div className="product__body">
							<div className="product__header">
								<ul className="product__cats list-unstyled">
									<li className="product__cats-item">
										<a href="#">Framed prints</a>
									</li>
								</ul>
								<h2 className="product__title h4"><a href="shop-product.html">Magimons black framed print</a></h2>
								<ul className="product__meta list-unstyled">
									<li className="product__meta-item product__price">$38.00</li>
									<li className="product__meta-item product__ratings">
										<div className="fas star-rating">
											{/* <span style="width: 80%;">&nbsp;</span> */}
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="product">
						<a href="shop-product.html" className="product__thumbnail">
							<img src="assets/img/samples/product-img-02.png" alt="" />
							<div className="btn">Add to cart +</div>
						</a>
						<div className="product__body">
							<div className="product__header">
								<ul className="product__cats list-unstyled">
									<li className="product__cats-item">
										<a href="#">Coffee mugs</a>
									</li>
								</ul>
								<h2 className="product__title h4"><a href="shop-product.html">Necromancers ennamel mug</a></h2>
								<ul className="product__meta list-unstyled">
									<li className="product__meta-item product__price">$16.00</li>
									<li className="product__meta-item product__ratings">
										<div className="fas star-rating">
											{/* <span style="width: 60%;">&nbsp;</span> */}
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
			
			</div>
		</main>
    </HorizontalScroll>
      <MenuPanelComponent isActive={openMenu} />
    </div>
  )
}

export default ShopComponent;
