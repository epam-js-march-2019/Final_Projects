import React from 'react'
import Service from './Service.js'
import follow from "../../follow";
import client from "../../client";

const root = '/api';

export default class ServiceList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            services: [], attributes: [], page: 1, pageSize: 20, links: {},
            loggedInManager: this.props.loggedInManager

        };

        this.loadFromServer = this.loadFromServer.bind(this);
    }

    loadFromServer() {
        follow(client, root, [{
            rel: 'services'
        }]).done(response => {
            console.log('response');
            console.log(response);
            this.setState({
                services: response.entity._embedded.services
            });
        });
    }

    componentDidMount() {
        this.loadFromServer();
    }

    render() {
        const service = this.state.services.map((item, index) => {
            return <Service key={index} service={item}/>
        });

        console.log(service);
        return (
            <section className="service-list">
                {service}
            </section>
        )
    }

}