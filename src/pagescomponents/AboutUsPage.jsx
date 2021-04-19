import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {BannerArea} from "../components/BannerArea";

export class AboutUsPage extends React.Component{
    render() {
        return(
            <BrowserRouter>
                <BannerArea/>
                <div className="container text-center">
                    <h1>На этой странице будет содержатся информация о нас</h1>
                </div>
            </BrowserRouter>
        )
    }
}