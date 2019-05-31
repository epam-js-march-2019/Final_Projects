import React, {Component} from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import './styles/header.css';

class Header extends Component{


    render() {
        return(
                <nav className="navbar navbar-default header-block" role="navigation">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#bs-example-navbar-collapse-1">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link className="navbar-brand" to="/">Афродита</Link>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li><Link to="/user">User</Link></li>
                                <li><Link to="/about">About</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
        );
    }
}

const mapStateToProps = function(state) {
    return {
        user: state.user,
    }
};

export default connect(mapStateToProps)(Header);