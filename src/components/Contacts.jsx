import React from "react";

export class OurContacts extends React.Component{
    render() {
        return(
            <div>
                <div className="single-contact-address d-flex flex-row">
                    <div className="icon">
                        <span className="lnr lnr-home"></span>
                    </div>
                    <div className="contact-details">
                        <h5>ул.Ленина, д.61/1, оф.30 (ДБ Элегант)</h5>
                        <p>РФ, Пермский край, г.Чайковский </p>
                    </div>
                </div>
                <div className="single-contact-address d-flex flex-row">
                    <div className="icon">
                        <span className="lnr lnr-phone-handset"></span>
                    </div>
                    <div className="contact-details">
                        <h5>+7 (34241) 3-56-56</h5>
                        <h5>+7 (922) 33-00-204</h5>
                        <p>Пн - пт с 9 to 19<br/>
                            Сб с 9 to 14</p>
                    </div>
                </div>
                <div className="single-contact-address d-flex flex-row">
                    <div className="icon">
                        <span className="lnr lnr-envelope"></span>
                    </div>
                    <div className="contact-details">
                        <h5>stomadent@gmail.com</h5>
                        <p>Направляйте свои сообщения в любое время</p>
                    </div>
                </div>
            </div>
        )
    }
}