import React, {Component} from 'react';
import "./styles/userslist.css";

class UsersList extends Component {
    constructor(props){
        super(props);
        this.state = {
            users : props.users
        }
    }

    render() {
        return (
            <div className="container-fluid users-list">
                {
                    this.state.users.map( (user, i) => {
                        return(
                            <div className="col-xs-12 col-md-3" key={i}>
                                <div className="thumbnail">
                                    <img src={user.picture.large} className="img-responsive"/>
                                    <h2>{user.name.first}</h2>
                                    <p>{user.email}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default UsersList;