import React, {Component} from 'react';
import { connect } from 'react-redux';
import SalonList from "../salon/salon-list";
import Callback from '../forms/Callback';
import About from '../about/About';
import Users from '../ourusers/Users';
import './styles/home.css';
import { css } from '@emotion/core';
import { BeatLoader } from 'react-spinners';


const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading : true
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loading : false
            })
        },
            2000);
    }


    render() {
        return(
            <div className="container home-block">
                <h1>Сеть салонов красоты "Афродита"</h1>
                {this.state.loading ?
                    <BeatLoader css={override} sizeUnit={"px"} size={20} color={'#fe4ad8'} loading={this.state.loading}/> : <SalonList/>
                }
                <Callback/>
                <Users/>
                <About/>
            </div>
        )
    }
}



const mapStateToProps = function(state) {
    return {
        profile: state.user,
        state: state
    }
};


export default connect(mapStateToProps)(Home);