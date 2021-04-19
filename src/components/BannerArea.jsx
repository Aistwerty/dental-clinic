import React from 'react'

export class BannerArea extends React.Component{
    render() {
        return(
           /* <section className="banner-area relative" id="home">
                <div className="overlay overlay-bg"></div>
                <div className="container">
                    <div className="row fullscreen d-flex justify-content-center align-items-center">
                        <div className="banner-content col-lg-9 col-md-12 justify-content-center">
                            <h6 className="text-uppercase">Don’t look further, This is your Dentist</h6>
                            <h1>
                                Authentic Dental Service
                            </h1>
                            <p className="text-white mx-auto">
                                If
                            </p>
                            <a href="#" className="primary-btn header-btn text-uppercase mt-10">Get Started</a>
                        </div>
                    </div>
                </div>
            </section>*/
            <section class="banner-area relative about-banner" id="home">
                <div class="overlay overlay-bg"></div>
                <div class="container">
                    <div class="row d-flex align-items-center justify-content-center">
                        <div class="about-content col-lg-12">
                            <h1 class="text-white">
                                Contact Us
                            </h1>
                            <p class="text-white link-nav"><a href="index.html">Home </a>  <span class="lnr lnr-arrow-right"></span>  <a href="contact.html"> Contact Us</a></p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}