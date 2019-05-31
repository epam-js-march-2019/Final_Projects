import React, {Component} from 'react';
import axios from "axios";
import { css } from '@emotion/core';
import { BeatLoader } from 'react-spinners';
import UsersList from "./UsersList";

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;


class Users extends Component{

    constructor(props){
        super(props);
        this.state = {
            loading : true,
            users : []
        };
        this.setUsers = this.setUsers.bind(this);
    }

    componentWillMount() {
        const users = this.state.users;
        setTimeout( () => {
            for ( let i = 0 ; i < 4; i++){
                axios.get("https://api.randomuser.me/", {})
                    .then( (response) => {
                            users.push(response.data.results[0]);
                            this.setUsers(users);
                        }
                    )
                    .catch((error) => console.log(error))
            }
        },1000);


    }

    setUsers(users){
        this.setState({
            users : users,
            loading : false
        });
    }


    render() {
        return(
            <div className="row">
                <h2 className="text-center">Наши довольные клиенты</h2>
                {
                    this.state.loading ?
                        <BeatLoader css={override} sizeUnit={"px"} size={20} color={'#fe4ad8'} loading={this.state.loading}/>
                        :
                        <UsersList users={this.state.users}/>
                }
            </div>
        )
    }
}




export default Users;