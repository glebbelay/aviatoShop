import React, { Component } from 'react'
import product1 from "../../images/shop/products/product-1.jpg"

import productImg from "../../images/shop/products/modal-product.jpg"

export class product extends Component {
  render() {
    return (
      <div>	
	
                <div className="col-md-4">
                
                <div className="product-item">
                <a href='/product-single'>
                    <div className="product-thumb">
                        <span className="bage">Sale</span>
            
                        <img className="img-responsive" src={product1} alt="product-img" />
                        
                    </div>
                    </a>
                    <div className="product-content">
                        <h4><a href="product-single.html">Reef Boardsport</a></h4>
                        <p className="price">$200</p>
                    </div>
                </div>
            </div>

            
            
        </div>

    )
  }
}

export default product