import React from "react";


export class AddFeedback extends React.Component{
    constructor() {
        super();
        this.sendFeedback = this.sendFeedback.bind(this);
        this.inputFeedback = this.inputFeedback.bind(this);
        this.state={
            client:"",
            email:"",
            phone:"",
            text:""
        }
    }

    sendFeedback(event){
        event.preventDefault();
        const formData = new FormData();
        formData.append("client", this.state.client);
        formData.append("email",this.state.email);
        formData.append("phone",this.state.phone);
        formData.append("text",this.state.text);
        fetch("http://stomadent.aistwerty.beget.tech/php/addFeedback.php",{
            method: "POST",
            body: formData
        }).then(response=>response.json())
            .then(result=> {
                if (result.result === 'success') alert("Ваш отзыв успешно добавлен");
                else alert("Добавление отзыва пока недоступно, попробуйте повторить попытку позже");
                this.setState({
                    client:"",
                    email:"",
                    phone:"",
                    text:""
                })
            })
    }

    inputFeedback(event){
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })

    }

    render() {
        return <div className="container">
                <form className="form-area">
                    <div className="row">
                        <div className="col-lg-6 mx-auto form-group text-center">
                            <h3>Оставить отзыв</h3>
                            <p> Мы очень ценим своих клиентов и заботимся о высоком качестве наших услуг.</p>
                            <input value={this.state.client} onChange={this.inputFeedback} name="client" placeholder="Введите Ваше имя"
                                /*onFocus="this.placeholder = ''"
                                onBlur="this.placeholder = 'Введите Ваше имя'"*/
                                   className="common-input mb-20 form-control" required="" type="text"/>

                            <input value={this.state.email} onChange={this.inputFeedback} name="email" placeholder="Введите email"
                                   pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                                //onFocus="this.placeholder = ''"
                                //onBlur="this.placeholder = 'Введите email'"
                                   className="common-input mb-20 form-control" required=""
                                   type="email"/>

                            <input value={this.state.phone} onChange={this.inputFeedback} name="phone" placeholder="Номер телефона для связи"
                                /*onFocus="this.placeholder = ''"
                                onBlur="this.placeholder = 'Номер телефона для связи'"*/
                                   className="common-input mb-20 form-control" required=""
                                   type="text"/>
                            <textarea value={this.state.text} onChange={this.inputFeedback} className="common-textarea form-control py-2" name="text"
                                      placeholder="Текст отзыва" /*onFocus="this.placeholder = ''"
                                      onBlur="this.placeholder = 'Текст обращения'"*/ required=""/>
                            <div className="col-lg-12 py-2 text-center">
                                <button className="genric-btn primary circle" onClick={this.sendFeedback}>Опубликовать отзыв</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

    }
}

export default AddFeedback;