import React, {Component} from 'react';
import './styles/profile.css';
import {connect} from "react-redux";
import axios from 'axios';
import Rating from "./Rating";

class Profile extends Component{
    constructor(props){
        super(props);
        this.state ={
            username : this.props.profile.username,
            email : this.props.profile.email,
            skills : [],
            feedbacks : ["Пока у вас нет отзывов"],
            rating : 0
        };
        this.setUserInfo = this.setUserInfo.bind(this);
        this.signOut = this.props.signOut.bind(this);

    }

    componentWillMount(){
        axios.post('/profile',{
            username : this.props.profile.username,
            email : this.props.profile.email
        })
            .then( (response) =>{
                if(response.data.result =='success'){
                    let data = {
                        about : response.data.about,
                        hobbies : response.data.hobbies,
                        skills : response.data.skills,
                        rating : response.data.rating,
                        img : response.data.img,
                        followers : response.data.followers,
                        following : response.data.following,
                        snippets : response.data.snippets,
                        feedbacks : response.data.feedbacks
                    };
                    this.setUserInfo(data);
                }

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    setUserInfo(data){

        let feedbacks = data.feedbacks.map( ( feedback ) => {
            return "В ближайшее время оператор обязательно свяжется с вами по указанному вами телефону ("+ feedback +")";
        });

        this.setState({
            about : data.about,
            hobbies : data.hobbies,
            skills : data.skills,
            img : data.img,
            followers : data.followers,
            following : data.following,
            snippets : data.snippets,
            feedbacks : feedbacks
        });
    }





    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
                        <div className="well profile">
                            <div className="col-sm-12">
                                <div className="col-xs-12 col-sm-8">
                                    <h2>{this.state.username}</h2>
                                    <p><strong>Email: </strong> {this.state.email} </p>
                                    <p><strong>About: </strong> {this.state.about} </p>
                                    <p><strong>Hobbies: </strong> {this.state.hobbies} </p>
                                    <p><strong>Skills: </strong> {this.state.skills.map( (item) => <span className="tags">{item}</span> )}</p>
                                    <p><strong>Записи: </strong><ol>{this.state.feedbacks.map( (item, i) => <li>{item}</li>)}</ol></p>
                                    <button onClick={this.signOut} className="btn btn-info">Выйти</button>
                                </div>
                                <div className="col-xs-12 col-sm-4 text-center">
                                    <figure>
                                        <img
                                            src={this.state.img}
                                            alt="" className="img-circle img-responsive" />
                                            <figcaption className="ratings">
                                                <p>Ratings
                                                    <a href="#">
                                                        <span className="fa fa-star"></span>
                                                    </a>
                                                    <a href="#">
                                                        <span className="fa fa-star"></span>
                                                    </a>
                                                    <a href="#">
                                                        <span className="fa fa-star"></span>
                                                    </a>
                                                    <a href="#">
                                                        <span className="fa fa-star"></span>
                                                    </a>
                                                    <a href="#">
                                                        <span className="fa fa-star-o"></span>
                                                    </a>
                                                </p>
                                            </figcaption>
                                        <Rating/>
                                    </figure>
                                </div>
                            </div>
                            <div className="col-xs-12 divider text-center">
                                <div className="col-xs-12 col-sm-4 emphasis">
                                    <h2><strong>{this.state.followers}</strong></h2>
                                    <p>
                                        <small>Followers</small>
                                    </p>

                                </div>
                                <div className="col-xs-12 col-sm-4 emphasis">
                                    <h2><strong>{this.state.following}</strong></h2>
                                    <p>
                                        <small>Following</small>
                                    </p>

                                </div>
                                <div className="col-xs-12 col-sm-4 emphasis">
                                    <h2><strong>{this.state.snippets}</strong></h2>
                                    <p>
                                        <small>Snippets</small>
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = function(state) {
    return {
        profile: state.user
    }
};

export default connect(mapStateToProps)(Profile);