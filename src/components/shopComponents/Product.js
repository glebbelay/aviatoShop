import React, { Component } from 'react'
import product1 from "../../images/shop/products/product-1.jpg"

import productImg from "../../images/shop/products/modal-product.jpg"

export class product extends Component {
  render() {
    return (
      <div>	
	
                <div className="col-md-4">
                <div className="product-item">
                    <div className="product-thumb">
                        <span className="bage">Sale</span>
                        <img className="img-responsive" src={product1} alt="product-img" />
                        <div className="preview-meta">
                            <ul>
                                <li>
                                    <span  data-toggle="modal" data-target="#product-modal">
                                        <i className="tf-ion-ios-search-strong"></i>
                                    </span>
                                </li>
                                <li>
                                    <a href="#!" ><i className="tf-ion-ios-heart"></i></a>
                                </li>
                            </ul>
                            </div>
                    </div>
                    <div className="product-content">
                        <h4><a href="product-single.html">Reef Boardsport</a></h4>
                        <p className="price">$200</p>
                    </div>
                </div>
            </div>

            <div className="modal product-modal fade in" id="product-modal">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <i className="tf-ion-close"></i>
            </button>
            <div className="modal-dialog " role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                <div className="modal-image">
                                    <img className="img-responsive" src={productImg} alt="product-img" />
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="product-short-details">
                                    <h2 className="product-title">GM Pendant, Basalt Grey</h2>
                                    <p className="product-price">$200</p>
                                    <p className="product-short-description">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem iusto nihil cum. Illo laborum numquam rem aut officia dicta cumque.
                                    </p>
                                    <a href="/product-single" className="btn btn-main">Product Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>

    )
  }
}

export default product