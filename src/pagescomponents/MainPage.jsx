import React from "react";
import {BrowserRouter} from "react-router-dom";
import {OpenTime} from "../components/OpenTime";

export class MainPage extends React.Component{
    render() {
        return(
            <BrowserRouter>
                <section className="banner-area relative" id="home">
                    <div className="overlay overlay-bg"></div>
                    <div className="container">
                        <div className="row fullscreen d-flex justify-content-center align-items-center">
                            <div className="banner-content col-lg-9 col-md-12 justify-content-center">
                                <h6 className="text-uppercase">Don’t look further, This is your Dentist</h6>
                                <h1>
                                    Authentic Dental Service
                                </h1>
                                <p className="text-white mx-auto">
                                    If you are looking at blank cassettes on the web, you may be very confused at the
                                    difference in price. You may see some for as low as $.17 each. You may be saying to
                                    yourself.
                                </p>
                                <a href="#" className="primary-btn header-btn text-uppercase mt-10">Get Started</a>
                            </div>
                        </div>
                    </div>
                </section>
                <OpenTime/>
            </BrowserRouter>
        )
    }
}