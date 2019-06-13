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
            services: [],
            offices: []
        };
        this.loadFromServer = this.loadFromServer.bind(this);
        this.onChangeService = this.onChangeService.bind(this);
        this.onClickOffice = this.onClickOffice.bind(this);
        this.onMapMarkerEnter = this.onMapMarkerEnter.bind(this);
        this.onMapMarkerLeave = this.onMapMarkerLeave.bind(this);
    }

    onChangeService(event) {
        const service = this.state.services[event.target.value];
        if (service) {
            client({
                method: 'GET',
                path: service._links.offices.href
            }).done(response => {
                this.setState({
                    offices: response.entity._embedded.offices
                });
            })
        } else {
            this.loadFromServer('offices');
        }
    }

    onClickOffice(event) {
        console.log("office clicked");
        console.log(event.target);
        //TODO: implement office click action
    }

    onMapMarkerEnter(markerIndex) {
        console.log('enter');
        console.log(this.state.offices[markerIndex].name)
        //TODO: show office details tooltip
    }

    onMapMarkerLeave(markerIndex) {
        console.log('leave');
        console.log(this.state.offices[markerIndex].name);
        //TODO: hide office details tooltip
    }

    loadFromServer(target) {
        follow(client, root, [{
            rel: target
        }]).done(response => {
            const newState = {};
            newState[target] = response.entity._embedded[target];
            this.setState(newState);
            console.log(this.state);
        });
    }

    componentDidMount() {
        this.loadFromServer('services');
        this.loadFromServer('offices');
    }

    render() {
        return (
            <div>
                <Map markers={this.state.offices} center={{lat: 59.95, lng: 30.33}} zoom={11}
                     onChildMouseEnter={this.onMapMarkerEnter} onChildMouseLeave={this.onMapMarkerLeave}/>
                <SelectService services={this.state.services} onChange={this.onChangeService}/>
                <CompanyList companies={this.state.offices} onClick={this.onClickOffice}/>
            </div>
        )
    }

}