import React from "react";

export class ClientCallBack extends React.Component{
    constructor(props) {
        super(props);
        this.inputCallback = this.inputCallback.bind(this);
        this.sendCallBack = this.inputCallback.bind(this);
        this.state={
            client:"",
            email:"",
            phone:"",
            title:"",
            message:""
        }
    }

    inputCallback(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }


    sendCallBack(event){
        event.preventDefault();
        const formData = new FormData();
        formData.append("client",this.state.client);
        formData.append("email",this.state.email);
        formData.append("phone",this.state.phone);
        formData.append("title",this.state.title);
        formData.append("message",this.state.message);
        fetch("http://stomadent.aistwerty.beget.tech/php/sendCallback.php",{
            method: 'POST',
            body: formData
        }).then(response=>response.json())
            .then(result=> console.log(result))

    }

    render() {
        return(
            <div>
            <div className="typo-list text-center"><h5> Форма обратной связи </h5></div>
                <form className="form-area">
                    <div className="row">
                        <div className="col-lg-6 form-group">
                            <input name="client" value={this.state.client} onChange={this.inputCallback} placeholder="Введите Ваше имя"
                                   /*onFocus="this.placeholder = ''"
                                   onBlur="this.placeholder = 'Введите Ваше имя'"*/
                                   className="common-input mb-20 form-control" required="" type="text"/>

                            <input name="email" value={this.state.email} onChange={this.inputCallback} placeholder="Введите email"
                                   pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                                   //onFocus="this.placeholder = ''"
                                   //onBlur="this.placeholder = 'Введите email'"
                                   className="common-input mb-20 form-control" required=""
                                   type="email"/>

                            <input name="phone" value={this.state.phone} onChange={this.inputCallback} placeholder="Номер телефона для связи"
                                   /*onFocus="this.placeholder = ''"
                                   onBlur="this.placeholder = 'Номер телефона для связи'"*/
                                   className="common-input mb-20 form-control" required=""
                                   type="text"/>
                        </div>
                        <div className="col-lg-6 form-group">
                            <input name="title" value={this.state.title} onChange={this.inputCallback} placeholder="Тема обращения"
                                   /*onFocus="this.placeholder = ''"
                                   onBlur="this.placeholder = 'Тема обращения'"*/
                                   className="common-input mb-20 form-control" required=""
                                   type="title"/>
                            <textarea className="common-textarea form-control" value={this.state.message} onChange={this.inputCallback} name="message"
                                      placeholder="Текст обращения" /*onFocus="this.placeholder = ''"
                                      onBlur="this.placeholder = 'Текст обращения'"*/ required=""/>
                        </div>
                        <div className="col-lg-12 text-center">
                            <button className="genric-btn primary circle" onClick={this.sendCallBack}>Отправить сообщение</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}