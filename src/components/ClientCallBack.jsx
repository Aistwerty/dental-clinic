import React from "react";

export class ClientCallBack extends React.Component{
    render() {
        return(
            <div>
            <div className="container text-center py-1"><h5> Форма обратной связи </h5></div>
            <form className="form-area" id="myForm" action="mail.php" method="post" className="contact-form text-right">
                <div className="row">
                    <div className="col-lg-6 form-group">
                        <input name="name" placeholder="Введите Ваше имя"
                               onFocus="this.placeholder = ''"
                               onBlur="this.placeholder = 'Введите Ваше имя'"
                               className="common-input mb-20 form-control" required="" type="text"/>

                        <input name="email" placeholder="Введите email"
                               pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                               onFocus="this.placeholder = ''"
                               onBlur="this.placeholder = 'Введите email'"
                               className="common-input mb-20 form-control" required=""
                               type="email"/>

                        <input name="phone" placeholder="Номер телефона для связи"
                               onFocus="this.placeholder = ''"
                               onBlur="this.placeholder = 'Номер телефона для связи'"
                               className="common-input mb-20 form-control" required=""
                               type="text"/>
                    </div>
                    <div className="col-lg-6 form-group">
                        <input name="subject" placeholder="Тема обращения"
                               onFocus="this.placeholder = ''"
                               onBlur="this.placeholder = 'Тема обращения'"
                               className="common-input mb-20 form-control" required=""
                               type="text"/>
                        <textarea className="common-textarea form-control" name="message"
                                  placeholder="Текст обращения" onFocus="this.placeholder = ''"
                                  onBlur="this.placeholder = 'Текст обращения'" required=""/>
                    </div>
                    <div className="col-lg-12 text-center">
                        <button className="genric-btn primary circle">Отправить сообщение</button>
                    </div>
                </div>
            </form>
            </div>
        )
    }
}