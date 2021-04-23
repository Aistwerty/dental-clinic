import React from "react";
import {BrowserRouter} from "react-router-dom";
import {ClientsFeedback} from "../components/ClientsFeedback";
import {BannerArea} from "../components/BannerArea";
import {AddFeedback} from "../components/AddFeedback";

export class FeedBackPage extends React.Component{
    constructor() {
        super();
        this.state={
            h1:"Отзывы"
        }
    }

    render() {
        return(
            <BrowserRouter>
                <BannerArea h1={this.state.h1}/>
                <ClientsFeedback/>
                <AddFeedback/>
            </BrowserRouter>
        )
    }
}