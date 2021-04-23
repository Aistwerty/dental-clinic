import React from "react";
import {BrowserRouter} from "react-router-dom";
import {BannerArea} from "../components/BannerArea";
import {ElseServices} from "../components/ElseService";

export class ElseServicesPage extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            h1:"Дополнительные услуги"
        }
    }

    render() {
        return(
            <BrowserRouter>
                <BannerArea h1={this.state.h1}/>
                <ElseServices/>
            </BrowserRouter>
        )
    }
}