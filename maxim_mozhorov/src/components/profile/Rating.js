import React,{Component} from 'react';
import {connect} from "react-redux";
import Star from "./Star";
import './styles/rating.css';
import axios from "axios";

class Rating extends Component{
    constructor(props){
        super(props);
        this.state ={
            stars : 5,
            selectedStars : 0
        };

        axios.post('/profile',{
            username : props.profile.username,
            email : props.profile.email
        })
            .then( (response) =>{
                if(response.data.result =='success'){
                    let data = {
                        rating : response.data.rating,
                    };
                    this.setState({
                        selectedStars : data.rating
                    })

                }

            })
            .catch(function (error) {
                console.log(error);
            });

    }


    render() {
        return (
            <div className="star-rating">
                {
                    [...Array(this.state.stars)].map( (item, i) =>  {
                        if (this.state.selectedStars >= (i+1)){
                            return <Star selected={true} />
                        }
                        else {
                            return <Star/>
                        }
                    })
                }
                <p>{this.state.selectedStars} of {this.state.stars} stars</p>
            </div>
        );
    }
}


const mapStateToProps = function(state) {
    return {
        profile: state.user
    }
};

export default connect(mapStateToProps)(Rating);