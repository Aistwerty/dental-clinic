import React from "react";

function ViewFeedback (props){
    return(
        <div className="owl-item" style={{width:"360px", marginRight:"20px"}}>
        <div className="single-testimonial item">
            <p className="desc"> {props.text}</p>
            <h4>{props.client}</h4>
            <p> {props.date_added}</p>
        </div>
        </div>
    )
}

export class ClientsFeedback extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            feedback:[]
        }
    }

    componentDidMount() {
        fetch("http://stomadent.aistwerty.beget.tech/php/getFeedback.php")
            .then(response=>response.json())
            .then(result=>{
                this.setState({
                    feedback: result.map(feedback=><ViewFeedback
                        key={feedback.id}
                        text={feedback.text}
                        client={feedback.client}
                        date_added={feedback.date_added.slice(0,10)}
                        id={feedback.id}
                    />)
                });
            })
    }

    render() {
        return(
            <div>

        <section className="testomial-area section-gap">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="menu-content pb-60 col-lg-8">
                        <div className="title text-center">
                            <h1 className="mb-10">Отзывы наших клиентов</h1>
                            <p>Спасибо всем кто написал отзывы о нашей работе, будем рады видеть Вас снова.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="active-testimonial-carusel">
                            {this.state.feedback}
                    </div>
                </div>
            </div>
        </section>
        </div>

        )
    }
}

