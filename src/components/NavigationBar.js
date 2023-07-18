import React from "react";
import "../scss/templates/_navigation.scss";
import "../scss/home.scss";
import "../scss/_common.scss";

function NavigationBar() {
  return (
    <section className="menu">
      <nav className="navbar navigation">
        <div className="container">
          <div className="navbar-header">
            <h2 className="menu-title">Main Menu</h2>
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>

          <div id="navbar" className="navbar-collapse collapse text-center">
            <ul className="nav navbar-nav">
              <li className="dropdown ">
                <a href="/">Home</a>
              </li>

              <li className="dropdown ">
                <a href="/shop">Shop</a>
              </li>

              <li className="dropdown dropdown-slide">
                <a
                  href="#!"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  data-hover="dropdown"
                  data-delay="350"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Pages <span className="tf-ion-ios-arrow-down"></span>
                </a>
                <div className="dropdown-menu">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 mb-sm-3">
                      <ul>
                        <li className="dropdown-header">Introduction</li>
                        <li role="separator" className="divider"></li>
                        <li>
                          <a href="contact">Contact Us</a>
                        </li>
                        <li>
                          <a href="/about-as">About Us</a>
                        </li>
                        <li>
                          <a href="404">404 Page</a>
                        </li>
                        <li>
                          <a href="faq">FAQ</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default NavigationBar;
