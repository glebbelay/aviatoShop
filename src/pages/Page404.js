import React from 'react'
import siteLogo from "../images/logo.png"

function Page404() {
  return (
    <div>	
        <section class="page-404">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <a href="index.html">
                            <img src={siteLogo} alt="site logo" />
                        </a>
                        <h1>404</h1>
                        <h2>Page Not Found</h2>
                        <a href="index.html" class="btn btn-main"><i class="tf-ion-android-arrow-back"></i> Go Home</a>
                        <p class="copyright-text">© 2018 Themefisher All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </section>
</div>
  )
}

export default Page404