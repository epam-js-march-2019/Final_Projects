/* TODO
* 1. This menu looks really ugly, maybe place each item
* into separate component?
 */

import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";


class Header extends React.Component {

	render() {
		return (
			<nav className="navbar navbar-expand navbar-dark bg-dark justify-content-between">

				<Link
					className="navbar-brand"
					to={"/"}
				>
					<img src="/img/logo.png"/>
				</Link>

				<div className="mr-auto" id="navbarNav">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<Link
								className="nav-link"
								to={"/main"}
							>
								Main page
							</Link>
						</li>

						<li className="nav-item">
							<Link
								to={"/enlist"}
								className="nav-link"
							>
								Our services
							</Link>
						</li>
					</ul>
				</div>

				{ !this.props.logged &&

				<div className="" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link
								to={"/login"}
								className="nav-link"
							>
								Login
							</Link>
						</li>

						<li className="nav-item">
							<Link
								to={"/register"}
								className="nav-link"
							>
								Register
							</Link>
						</li>
					</ul>
				</div>
				}

				{ this.props.logged &&

				<div className="" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link
								to={"/account"}
								className="nav-link"
								// activeClassName={"active"}
							>
								Hello, {this.props.name}
							</Link>
						</li>
					</ul>
				</div>
				}
			</nav>
		);
	}
}

function mapStorageToProps(storage) {
	return {
		logged: storage.authReducer.logged,
		token: storage.authReducer.token,
		name: storage.authReducer.name
	}
}

export default connect(mapStorageToProps)(Header);

