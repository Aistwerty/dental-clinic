import React from "react";
import {BrowserRouter} from "react-router-dom";
import {BannerArea} from "../components/BannerArea";
import {ElseServices} from "../components/ElseService";

export class ElseServicesPage extends React.Component{
    render() {
        return(
            <BrowserRouter>
                <BannerArea/>
                <ElseServices/>
            </BrowserRouter>
        )
    }
}