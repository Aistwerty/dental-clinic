import React from 'react';


export class PageFooter extends React.Component{
    render() {
        return(
            <footer className="footer-area section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2  col-md-6">
                            <div className="single-footer-widget">
                                <h6>Услуги</h6>
                                <ul className="footer-nav">
                                    <li><a href="/dentalservice">Лечение кариеса</a></li>
                                    <li><a href="/dentalservice">Косметическая стоматология</a></li>
                                    <li><a href="/dentalservice">Протезирование</a></li>
                                    <li><a href="/elseservice">Пирсинг</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6  col-md-12">
                            <div className="single-footer-widget newsletter">
                                <h6></h6>
                                <p></p>
                            </div>
                        </div>
                        <div className="col-lg-4  col-md-6">
                            <div className="single-footer-widget mail-chimp">
                                <h6 className="mb-20">Контакты</h6>
                                <p>
                                    РФ, Пермский край, г.Чайковский,ул.Ленина, д.61/1, оф.30 (ДБ Элегант)
                                </p>
                                <h3>+7 (34241) 3-56-56</h3>
                                <h3>+7 (922) 33-00-204</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row footer-bottom d-flex justify-content-between">
                        <p className="col-lg-8 col-sm-12 footer-text m-0">
                            Copyright &copy;</p>
                    </div>
                </div>
            </footer>

        )
    }
}
