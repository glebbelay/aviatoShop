import React from 'react'
import Header from '../components/Header'
import NavigationBar from '../components/NavigationBar'
import PageHeader from '../components/contactUsComponents/PageHeader'
import Footer from '../components/Footer'

function ContactUs() {
  return (
    <div>
        


        <PageHeader />

        <section class="page-wrapper">
            <div class="contact-section">
                <div class="container">
                    <div class="row">
                        <div class="contact-form col-md-6 " >
                            <form id="contact-form" method="post" action="" role="form">
                            
                                <div class="form-group">
                                    <input type="text" placeholder="Your Name" class="form-control" name="name" id="name" />
                                </div>
                                
                                <div class="form-group">
                                    <input type="email" placeholder="Your Email" class="form-control" name="email" id="email" />
                                </div>
                                
                                <div class="form-group">
                                    <input type="text" placeholder="Subject" class="form-control" name="subject" id="subject" />
                                </div>
                                
                                <div class="form-group">
                                    <textarea rows="6" placeholder="Message" class="form-control" name="message" id="message"></textarea>	
                                </div>
                                
                                <div id="mail-success" class="success">
                                    Thank you. The Mailman is on His Way 
                                </div>
                                
                                <div id="mail-fail" class="error">
                                    Sorry, don't know what happened. Try later 
                                </div>
                                
                                <div id="cf-submit">
                                    <input type="submit" id="contact-submit" class="btn btn-transparent" value="Submit" />
                                </div>						
                                
                            </form>
                        </div>
                        
                        <div class="contact-details col-md-6 " >
                            <div class="google-map">
                                <div id="map">
                                </div>
                            </div>
                            <ul class="contact-short-info" >
                                <li>
                                    <i class="tf-ion-ios-home"></i>
                                    <span>Khaja Road, Bayzid, Chittagong, Bangladesh</span>
                                </li>
                                <li>
                                    <i class="tf-ion-android-phone-portrait"></i>
                                    <span>Phone: +880-31-000-000</span>
                                </li>
                                <li>
                                    <i class="tf-ion-android-globe"></i>
                                    <span>Fax: +880-31-000-000</span>
                                </li>
                                <li>
                                    <i class="tf-ion-android-mail"></i>
                                    <span>Email: hello@example.com</span>
                                </li>
                            </ul>
                            <div class="social-icon">
                                <ul>
                                    <li><a class="fb-icon" href="https://www.facebook.com/themefisher"><i class="tf-ion-social-facebook"></i></a></li>
                                    <li><a href="https://www.twitter.com/themefisher"><i class="tf-ion-social-twitter"></i></a></li>
                                    <li><a href="https://themefisher.com/"><i class="tf-ion-social-dribbble-outline"></i></a></li>
                                    <li><a href="https://themefisher.com/"><i class="tf-ion-social-googleplus-outline"></i></a></li>
                                    <li><a href="https://themefisher.com/"><i class="tf-ion-social-pinterest-outline"></i></a></li>
                                </ul>
                            </div>
                        </div>
                            
                        
                    
                    </div> 
                </div> 
            </div>
        </section>


        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCC72vZw-6tGqFyRhhg5CkF2fqfILn2Tsw"></script>
        <script type="text/javascript" src="plugins/google-map/gmap.js"></script>

    </div>
  )
}

export default ContactUs