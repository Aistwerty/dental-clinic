import React from 'react';
import {NavLink} from "react-router-dom";

export class PageHeader extends React.Component{
    render() {
        return(
            <header id="header">
                <div className="header-top">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-sm-6 col-4 header-top-left no-padding">
                                <a href="index.html"><img src="img/logo.png" alt="" title=""/></a>
                            </div>
                            <div className="col-lg-6 col-sm-6 col-8 header-top-right no-padding">
                                <a className="btns" href="tel:+953 012 3654 896">+953 012 3654 896</a>
                                <a className="btns" href="mailto:support@colorlib.com">support@colorlib.com</a>
                                <a className="icons" href="tel:+953 012 3654 896">
                                    <span className="lnr lnr-phone-handset"></span>
                                </a>
                                <a className="icons" href="mailto:support@colorlib.com">
                                    <span className="lnr lnr-envelope"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container main-menu">
                    <div className="row align-items-center justify-content-between d-flex">
                        <nav id="nav-menu-container">
                            <ul className="nav-menu">
                                <li className="menu-active"><a href="index.html">Главная</a></li>
                                <li><a href="#">О нас</a></li>
                                <li><a href="#">Стоматологические слуги</a></li>
                                <li><a href="#">Прочие слуги</a></li>
                                <li><NavLink className="nav-link" to="/opentime">Время работы</NavLink></li>
                                <li className="menu-has-children"><a href="">Blog</a>
                                    <ul>
                                        <li><a href="blog-home.html">Blog Home</a></li>
                                        <li><a href="blog-single.html">Blog Single</a></li>
                                        <li className="menu-has-children"><a href="">Level 2</a>
                                            <ul>
                                                <li><a href="#">Item One</a></li>
                                                <li><a href="#">Item Two</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="pricing.html">Цены</a></li>
                                <li><a href="contact.html">Контакты</a></li>
                            </ul>
                        </nav>
                        <div className="menu-social-icons">
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-instagram"></i></a>
                            <a href="#"><i className="fa fa-telegram"></i></a>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}