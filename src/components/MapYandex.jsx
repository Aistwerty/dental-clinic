import React from "react";

export class MapYandex extends React.Component{
    render() {
        return(
            <div className="col-lg py-5 mx-auto">
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A3497364036955f028e4c0a82bc523f55a2a970217349724c5083efee8feb77e9&amp;source=constructor"
                    width="100%" height="298" frameBorder="0"/>
            </div>
        )
    }
}