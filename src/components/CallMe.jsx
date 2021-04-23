import React from "react";

export class CallMe extends React.Component{
    render() {
        return(
            <section className="banner-area relative" id="home">
                <div className="overlay overlay-bg"/>
                <div className="container">
                    <div className="row fullscreen d-flex justify-content-center align-items-center">
                        <div className="banner-content col-lg-9 col-md-12 justify-content-center">
                            <h1>Мучает зубная боль?!</h1>
                            <h1>Не смогли дозвонится?!</h1>
                            <p className="text-white mx-auto">
                                Оставьте заявку на обратный звонок и мы перезвоним Вам!
                            </p>
                            <a href="" className="primary-btn header-btn text-uppercase mt-10">Оставить заявку</a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}