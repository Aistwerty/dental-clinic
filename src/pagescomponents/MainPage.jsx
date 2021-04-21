import React from "react";
import {BrowserRouter} from "react-router-dom";
import {OpenTime} from "../components/OpenTime";
import {CallMe} from "../components/CallMe";

export class MainPage extends React.Component{
    render() {
        return(
            <BrowserRouter>
                <CallMe/>
                <OpenTime/>
            </BrowserRouter>
        )
    }
}