import React, {Component} from "react";
import axios from 'axios';
import Profile from '../profile/Profile';
import Autorization from '../forms/Autorization';
import { connect } from 'react-redux';
import './styles/signform.css';

class User extends Component{
    constructor(props){
        super(props);
        this.state = {
            isGuest : true,
            username : "",
            email: ""
        };

        axios.post('/user',{})
            .then( (response) =>{
                if ( response.data !== "failure" ){
                    this.props.profile.isGuest = false;
                    this.props.profile.username = response.data.username;
                    this.props.profile.email = response.data.email;
                    this.setState({
                        isGuest : this.props.profile.isGuest,
                        username : this.props.profile.username,
                        email: this.props.profile.email
                    });

                }
            })
            .catch(function (error) {
                console.log(error);
            });

        this.setUser = this.setUser.bind(this);
        this.signOut = this.signOut.bind(this);

    }

    signIn(email, password){

        axios.post('/signin',{
            email : email,
            password : password
        })
            .then( (response) =>{
                if(response.data.result =='success'){
                    const data ={
                        isGuest : false,
                        username : response.data.username,
                        email : response.data.email
                    };

                    this.setUser(data);

                }
                else {
                    alert("Не найдено пользователя");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    signUp(data){
        axios.post('/signup',{
            data : data
        })
            .then( (response) =>{
                if(response.data.result =='success'){
                    const data ={
                        isGuest : false,
                        username : response.data.username,
                        email : response.data.email
                    };
                    this.setUser(data);

                }
                else {
                    alert("Такой пользователь уже есть!!!");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    signOut(){
        axios.post("/signout",{})
            .then(
                (response) =>{
                    this.setState({
                        isGuest : true
                    });
                }
            )
            .catch((error) => console.log(error))
    }

    setUser(data){
        this.props.dispatch({
            type: "AUTHORIZATION",
            data
        });
        this.setState(data);
    }


    render() {
        return(
          <div>
              {this.state.isGuest ?  <Autorization signIn={this.signIn.bind(this)}  signUp={this.signUp.bind(this)} />: <Profile name={this.state.name} email={this.state.email} signOut={this.signOut}/>}
          </div>
        );
    }
}

const mapStateToProps = function(state) {
    return {
        profile: state.user
    }
};

export default connect(mapStateToProps)(User);