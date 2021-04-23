import React from 'react'

export class BannerArea extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            h1: ""
        }
    }
    render() {
        return(

            <section class="banner-area relative about-banner" id="home">
                <div class="overlay overlay-bg"></div>
                <div class="container">
                    <div class="row d-flex align-items-center justify-content-center">
                        <div class="about-content col-lg-12">
                            <h1 class="text-white">
                                {this.props.h1}
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}