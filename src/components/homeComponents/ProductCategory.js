import React from 'react'
import category1 from "../../images/shop/category/category-1.jpg"
import category2 from "../../images/shop/category/category-2.jpg"
import category3 from "../../images/shop/category/category-3.jpg"

function ProductCategory() {
  return (
    <div>
        <section class="product-category section">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="title text-center">
                        <h2>Product Category</h2>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="category-box">
                        <a href="#!">
                            <img src={category1} alt="category1" />
                            <div class="content">
                                <h3>Clothes Sales</h3>
                                <p>Shop New Season Clothing</p>
                            </div>
                        </a>	
                    </div>
                    <div class="category-box">
                        <a href="#!">
                            <img src={category2} alt="category2" />
                            <div class="content">
                                <h3>Smart Casuals</h3>
                                <p>Get Wide Range Selection</p>
                            </div>
                        </a>	
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="category-box category-box-2">
                        <a href="#!">
                            <img src={category3} alt="category3" />
                            <div class="content">
                                <h3>Jewellery</h3>
                                <p>Special Design Comes First</p>
                            </div>
                        </a>	
                    </div>
                </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default ProductCategory