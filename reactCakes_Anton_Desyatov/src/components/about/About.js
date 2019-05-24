import React from 'react'
import cakeShopImage from '../../images/cake-shop-outside.jpg'
import './About.css'
import {
    first_paragraph,
    types_of_bakery,
    types_of_bakery_paragraph,
    contact_info,
    contacts
    } from '../../constants/about-text'

class About extends React.Component{
    constructor(props){
        super(props);
        this.types = types_of_bakery;
        this.contacts = contacts;
    }

    getTypes = () => {
        let types = [];
        this.types.map((type) => {
            return types.push(<ul>{type}</ul>);
        });
        return types;
    };

    getContacts = () => {
        let contacts = [];
        for(let prop in this.contacts){
            contacts.push(<ul>{prop}: {this.contacts[prop]}</ul>);
        }
        return contacts
    };

    render(){
        return(
                <article className='about'>
                    <p className='shopName'>CupCakes</p>
                    <section className='aboutContainer info1'>
                        <div className='aboutImageContainer'>
                        </div>
                        <p>{first_paragraph}</p>
                    </section>
                    <section className='aboutContainer info2'>
                        <p>{types_of_bakery_paragraph}</p>
                        <ul>
                            {this.getTypes()}
                        </ul>
                    </section>
                    <section className='aboutContainer info3'>
                        <p>{contact_info}</p>
                        <ul>
                            {this.getContacts()}
                        </ul>
                    </section>
                </article>
        )
    }
}

export default About;