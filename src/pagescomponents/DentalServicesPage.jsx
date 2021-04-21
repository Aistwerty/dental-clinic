import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import {BannerArea} from "../components/BannerArea";
import {ConsultService} from "../components/ConsultService";
import {CosmeticDentalService} from "../components/CosmeticDentalService";
import {CariesTreat} from "../components/CariesTreat";
import {ToothProtez} from "../components/ToothProtez";

export class DentalServicesPage extends React.Component{
    render() {
        return(
            <div>
            <BrowserRouter>
                <BannerArea/>
                <ConsultService/>
                <CosmeticDentalService/>
                <CariesTreat/>
                <ToothProtez/>
            </BrowserRouter>
           </div>
        )
    }
}