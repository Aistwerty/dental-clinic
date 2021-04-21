import React from "react";

export class AddFeedback extends React.Component{
    constructor(props) {
        super(props);
        this.sendFeedback = this.sendFeedback.bind(this);
        this.inputFeedback = this.inputFeedback.bind(this);
        this.state={
            name:"",
            email:"",
            phone:"",
            feedback:""
        }
    }

    sendFeedback(){}

    inputFeedback(){}

    render() {
        return <div className="container">
                <form className="form-area" onSubmit={this.sendFeedback}>
                    <div className="row">
                        <div className="col-lg-6 mx-auto form-group text-center">
                            <h3>Оставить отзыв</h3>
                            <p> Мы очень ценим своих клиентов и заботимся о высоком качестве наших услуг.</p>
                            <input value={this.state.name} onClick={this.inputFeedback} name="name" placeholder="Введите Ваше имя"
                                /*onFocus="this.placeholder = ''"
                                onBlur="this.placeholder = 'Введите Ваше имя'"*/
                                   className="common-input mb-20 form-control" required="" type="text"/>

                            <input value={this.state.email} onClick={this.inputFeedback} name="email" placeholder="Введите email"
                                   pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                                //onFocus="this.placeholder = ''"
                                //onBlur="this.placeholder = 'Введите email'"
                                   className="common-input mb-20 form-control" required=""
                                   type="email"/>

                            <input value={this.state.phone} onClick={this.inputFeedback} name="phone" placeholder="Номер телефона для связи"
                                /*onFocus="this.placeholder = ''"
                                onBlur="this.placeholder = 'Номер телефона для связи'"*/
                                   className="common-input mb-20 form-control" required=""
                                   type="text"/>
                            <textarea value={this.state.message} onClick={this.inputFeedback} className="common-textarea form-control py-2" name="feedback"
                                      placeholder="Текст отзыва" /*onFocus="this.placeholder = ''"
                                      onBlur="this.placeholder = 'Текст обращения'"*/ required=""/>
                            <div className="col-lg-12 py-2 text-center">
                                <button className="genric-btn primary circle">Опубликовать отзыв</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

    }
}