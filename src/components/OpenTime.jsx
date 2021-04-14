import React from 'react';

export class OpenTime extends React.Component{
    render() {
        return(
            <section className="open-hour-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 open-hour-wrap">
                            <h1>Время работы</h1>
                            <p>
                                Уточняйте время работы профильных специалистов по телефону.
                            </p>
                            <div className="date-list d-flex flex-row justify-content-center">
                                <ul className="colm-1">
                                    <li>Понедельник - пятница</li>
                                    <li>Суббота</li>
                                    <li>Воскресение</li>
                                </ul>
                                <ul className="colm-2">
                                    <li><span>:</span> 09:00am to 19:00pm</li>
                                    <li><span>:</span> 09:00am to 14:00pm</li>
                                    <li><span>:</span> Выходной</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}