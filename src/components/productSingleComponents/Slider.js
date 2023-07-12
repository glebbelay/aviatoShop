import React from 'react'
import product1 from '../../images/shop/single-products/product-1.jpg'
import product2 from '../../images/shop/single-products/product-2.jpg'
import product3 from '../../images/shop/single-products/product-3.jpg'
import product4 from '../../images/shop/single-products/product-4.jpg'
import product5 from '../../images/shop/single-products/product-5.jpg'
import product6 from '../../images/shop/single-products/product-6.jpg'


function Slider() {
  return (
    <div>
			<div class="col-md-5">
				<div class="single-product-slider">
					<div id='carousel-custom' class='carousel slide' data-ride='carousel'>
						<div class='carousel-outer'>
				
							<div class='carousel-inner '>
								<div class='item active'>
									<img src={product1} alt='' data-zoom-image={product1} />
								</div>
								<div class='item'>
									<img src={product2} alt='' data-zoom-image={product2} />
								</div>
								
								<div class='item'>
									<img src={product3} alt='' data-zoom-image={product3} />
								</div>
								<div class='item'>
									<img src={product4} alt='' data-zoom-image={product4} />
								</div>
								<div class='item'>
									<img src={product5} alt='' data-zoom-image={product5} />
								</div>
								<div class='item'>
									<img src={product6} alt='' data-zoom-image={product6} />
								</div>
								
							</div>
							
		
							<a class='left carousel-control' href='#carousel-custom' data-slide='prev'>
								<i class="tf-ion-ios-arrow-left"></i>
							</a>
							<a class='right carousel-control' href='#carousel-custom' data-slide='next'>
								<i class="tf-ion-ios-arrow-right"></i>
							</a>
						</div>
						
						<ol class='carousel-indicators mCustomScrollbar meartlab'>
							<li data-target='#carousel-custom' data-slide-to='0' class='active'>
								<img src={product1} alt='' />
							</li>
							<li data-target='#carousel-custom' data-slide-to='1'>
								<img src={product2} alt='' />
							</li>
							<li data-target='#carousel-custom' data-slide-to='2'>
								<img src={product3} alt='' />
							</li>
							<li data-target='#carousel-custom' data-slide-to='3'>
								<img src={product4} alt='' />
							</li>
							<li data-target='#carousel-custom' data-slide-to='4'>
								<img src={product5} alt='' />
							</li>
							<li data-target='#carousel-custom' data-slide-to='5'>
								<img src={product6} alt='' />
							</li>
							<li data-target='#carousel-custom' data-slide-to='6'>
								<img src={product6} alt='' />
							</li>
						</ol>
					</div>
				</div>
			</div>
    </div>

  )
}

export default Slider