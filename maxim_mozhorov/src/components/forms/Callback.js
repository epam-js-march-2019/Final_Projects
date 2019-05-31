import React, {Component} from "react";
import axios from 'axios';
import { connect } from 'react-redux';
import "./styles/callback.css";


class Callback extends Component{

    constructor(props){
        super(props);


        this.state = {
            username : this.props.profile.username,
            email : this.props.profile.email,
            text : "",
            isFormFilled : false
        };

        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleText = this.handleText.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleName(e){
        this.setState({
            username : e.target.value
        })
    }

    handleEmail(e){
        this.setState({
            email : e.target.value
        })
    }

    handleText(e){
        this.setState({
            text : e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        axios.post("/callback",{
            username : this.state.username,
            email : this.state.email,
            text : this.state.text
        })
            .then( (response) =>{
                if (response.data !== "failure" ) {
                    this.setState({
                        isFormFilled : true
                    });
                }
            })
            .catch( (error) => {
                console.log(error);
            });
    }


    render() {

        return (
            <div className="container">
                <div className="col-sm-6 col-sm-offset-3">
                    {!this.state.isFormFilled ? <Form handleName={this.handleName}
                                                      handleEmail={this.handleEmail}
                                                      handleText={this.handleText}
                                                      username={this.state.username}
                                                      email={this.state.email}
                                                      onSubmit={this.onSubmit}/>
                                                      :
                        <AccessForm/>
                    }
                </div>
            </div>
        );
    }
}



class Form extends Component {

    constructor(props){
        super(props);
        this.handleName = this.props.handleName.bind(this);
        this.handleEmail = this.props.handleEmail.bind(this);
        this.handleText = this.props.handleText.bind(this);
        this.onSubmit = this.props.onSubmit.bind(this);
    }

    render() {
        return (
            <div className="callback-form well" >
                <h3>Записаться на прием</h3>
                <form onSubmit={this.onSubmit} className="shake">
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="name" className="h4">Имя</label>
                            <input
                                onChange={this.handleName}
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Enter name"
                                required
                                value={this.props.username ? this.props.username  : ""}
                            />
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="email" className="h4">Email</label>
                            <input
                                onChange={this.handleEmail}
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter email"
                                required
                                value={this.props.email ? this.props.email  : ""}
                            />
                            <div className="help-block with-errors"></div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message" className="h4 ">Телефон</label>
                        <input
                            onChange={this.handleText}
                            id="message"
                            className="form-control" rows="5"
                            placeholder="+7-(921)-23-456-78"
                            required
                            type="tel"
                            name="phone"
                            pattern="+7-[0-9]{3}-[0-9]{2}-[0-9]{3}-[0-9]{2}"/>

                        <div className="help-block with-errors"></div>
                    </div>
                    <button type="submit" id="form-submit" className="btn btn-success btn-lg pull-right">Submit</button>
                    <div id="msgSubmit" className="h3 text-center hidden"></div>
                    <div className="clearfix"></div>
                </form>
            </div>
        );
    }
}

const AccessForm = ()=> {
    return(
        <div className="well success-callback-form" >
            <div className="text-center">
                <h2>Спасибо за заказ !!!</h2>
                <h4>В скором времени наш оператор свяжется с вами</h4>
            </div>
        </div>
    )
};


const mapStateToProps = function(state) {
    return {
        profile: state.user
    }
};


export default connect(mapStateToProps)(Callback);