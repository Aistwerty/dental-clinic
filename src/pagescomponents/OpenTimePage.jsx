import React from "react";
import {BrowserRouter} from "react-router-dom";
import {OpenTime} from "../components/OpenTime";
import {BannerArea} from "../components/BannerArea";

export class OpenTimePage extends React.Component{
    constructor() {
        super();
        this.state={
            h1: "Время работы"
        }
    }



    render() {
        return(
            <BrowserRouter>
                <BannerArea h1={this.state.h1}/>
                <OpenTime/>
            </BrowserRouter>
        )
    }
}