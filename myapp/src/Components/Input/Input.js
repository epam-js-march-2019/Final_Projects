import React, {Component}   from 'react';
import './Input.css';

export default class Input extends Component {
	constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){
    const inputType = this.props.type || 'text';
    return(
    	<div className="Input">
    	<label>{this.props.label}</label>
    	<input className={this.props.nameInput} placeholder={this.props.placeholder} type={inputType} />
    	<span>{this.props.errorMessage}</span>
    	</div>
    )

}}