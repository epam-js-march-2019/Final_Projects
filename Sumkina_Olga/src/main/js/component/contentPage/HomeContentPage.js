import React from 'react'
import Map from '../map/Map.js'
import SelectService from '../selectService/SelectService.js'
import CompanyList from '../company/CompanyList.js'

import client from '../../client'
import follow from '../../follow'

const root = '/api';

export default class HomeContentPage extends React.Component {
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
            this.setState({
                services: response.entity._embedded.services
            });
        });
    }

    componentDidMount() {
        this.loadFromServer();
    }

    render() {
        return (
            <div>
                <Map/>
                <SelectService services={this.state.services}/>
                <CompanyList/>
            </div>
        )
    }

}