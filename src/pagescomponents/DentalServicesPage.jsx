import React from "react";
import {BrowserRouter} from "react-router-dom";
import {BannerArea} from "../components/BannerArea";
import {ConsultService} from "../components/ConsultService";
import {CosmeticDentalService} from "../components/CosmeticDentalService";
import {CariesTreat} from "../components/CariesTreat";
import {ToothProtez} from "../components/ToothProtez";

export class DentalServicesPage extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            h1:"Стоматологические услуги"
        }
    }

    render() {
        return(
            <div>
            <BrowserRouter>
                <BannerArea h1={this.state.h1}/>
                <ConsultService/>
                <CosmeticDentalService/>
                <CariesTreat/>
                <ToothProtez/>
            </BrowserRouter>
           </div>
        )
    }
}