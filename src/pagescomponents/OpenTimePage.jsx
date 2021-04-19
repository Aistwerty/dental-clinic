import React from "react";
import {BrowserRouter} from "react-router-dom";
import {OpenTime} from "../components/OpenTime";
import {BannerArea} from "../components/BannerArea";

export class OpenTimePage extends React.Component{
    render() {
        return(
            <BrowserRouter>
                <BannerArea/>
                <OpenTime/>
            </BrowserRouter>
        )
    }
}