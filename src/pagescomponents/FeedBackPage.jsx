import React from "react";
import {BrowserRouter} from "react-router-dom";
import {ClientsFeedback} from "../components/ClientsFeedback";
import {BannerArea} from "../components/BannerArea";
import {AddFeedback} from "../components/AddFeedback";

export class FeedBackPage extends React.Component{
    render() {
        return(
            <BrowserRouter>
                <BannerArea/>
                <ClientsFeedback/>
                <AddFeedback/>
            </BrowserRouter>
        )
    }
}