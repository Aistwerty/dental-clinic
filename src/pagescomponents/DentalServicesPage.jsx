import React from "react";
import {BrowserRouter} from "react-router-dom";
import {BannerArea} from "../components/BannerArea";

export class DentalServicesPage extends React.Component{
    render() {
        return(
            <BrowserRouter>
                <BannerArea/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 d-flex flex-column">
                            <h3>Меню</h3>
                        </div>
                        <div className="col-lg-9 d-flex flex-column">
                            <h3>Вывод общей информации</h3>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}