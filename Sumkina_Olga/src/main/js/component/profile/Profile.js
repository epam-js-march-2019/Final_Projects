import React from 'react'

export default class Profile extends React.Component {
    render(){
        return(
            <section className="profile">
                <img src="https://randomuser.me/api/portraits/men/62.jpg" alt="profile"/>
                <div>
                    <h2>User name</h2>
                    <address>login@example.com</address>
                </div>
            </section>
        )
    }
}