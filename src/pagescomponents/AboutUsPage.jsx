import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {BannerArea} from "../components/BannerArea";

export class AboutUsPage extends React.Component{
    constructor(props) {
        super(props);
        this.state={
           h1: "О нас"
        }
    }

    render() {
        return(
            <BrowserRouter>
                <BannerArea h1={this.state.h1}/>
                <div>
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-sm-4">
                                <img src="../img/image/cab-4.jpg" height="100%" width="100%" alt=""/>
                            </div>
                            <div className="col-sm-8">
                                <div className="container text-center py-3">
                                <h3>Добрый день, уважаемые клиенты! </h3>
                                </div>
                                <p align="justify">
                                    &nbsp;&nbsp;&nbsp; Стомотологический кабинет "Стомадент" был основан более 20 лет назад. Целью его создания являлась оказание качественной квалифицированной стоматологической помощи жителям нашего прекрасного города.
                                    За время своего существлования "Стомадент" постоянно развивается, расширяя линейку оказываемых стоматологических.<br/>
                                    &nbsp;&nbsp;&nbsp; В настоящее время накоплен богатый опыт лечения и освоены множество современных методик, применяемых нашими высококвалифицироваанными специалистами.
                                    В своей работе специалисты "Стомадента" применяют только самые современные материалы и лекарства зарубежного производства.<br/>
                                    &nbsp;&nbsp;&nbsp; За более чем 20-ти летнюю историю деятельности "Стомадента" к нам обратилось за помощью более 10 000 человек. Благодаря качественному лечению и обслуживанию, полному спектру оказываемых стоматологических услуг, индивидуальному подходу, наши пациенты становятся нашими друзьями и лечатся целыми семьями.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container py-5">
                        <div className="row text center">
                            <div className="container text-center py-3">
                                <h3>Наши лицензии<br/></h3>
                                <p>
                                    ООО "Стомадент" осуществляет свою деятельность на основании лицензий государственного образца.
                                </p>
                            </div>


                            <div className="col-sm-4 mx-auto">
                                <img src="../img/lic/license1.jpg" height="100%" width="100%" alt=""/>
                            </div>
                            <div className="col-sm-4 mx-auto">
                                <img src="../img/lic/license2.jpg" height="100%" width="100%" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}