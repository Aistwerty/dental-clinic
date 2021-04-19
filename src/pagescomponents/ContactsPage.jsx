import React from "react";
import {BrowserRouter} from "react-router-dom";
import {BannerArea} from "../components/BannerArea";
import {OurContacts} from "../components/Contacts";
import {MapYandex} from "../components/MapYandex";
import {ClientCallBack} from "../components/ClientCallBack";

export class ContactsPage extends React.Component{
    constructor(props) {
        super(props);
    }


    render() {
        return(
            <BrowserRouter>
                <BannerArea/>
                <section className="contact-page-area">
                    <div className="container">
                        <MapYandex/>
                        <div className="row">
                            <div className="col-lg-4 d-flex flex-column address-wrap">
                                <OurContacts/>
                            </div>
                            <div className="col-lg-8">
                                <ClientCallBack/>
                            </div>
                        </div>
                    </div>
                </section>
            </BrowserRouter>
        )
    }
}
