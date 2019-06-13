import React, {Component} from 'react'

import "./style.css"
import "../../style/style.css";

class SearchBar extends Component {


    constructor (props) {
        super(props);


        this.state={
            suggestions: [],
            text: ''
        }


        const  {list} = this.props;

        this.items=[];

        list.forEach(item=> {
            if (!this.items.includes(item))
                this.items.push(item);
        });

    }


    render () {

        const {title}=this.props;
        const {text}=this.state;

        return (
            <React.Fragment>
                <label htmlFor={title} className={"search-bar__title"}>{title}</label>
                <input
                    className={"search-bar__input input"}
                    name={title}
                    type="text"
                    placeholder="Search.."
                    value={text}
                    onChange={this.onTextChanged}
                >
                </input>
                {this.renderSuggestions()}
            </React.Fragment>
        )
    }


    onTextChanged = (e) => {
        const items=this.items;

        const value=e.target.value;
        let suggestions = [];
        if (value.length) {
            const regex = new RegExp(`^${value}`, `i`);
            suggestions = items.sort().filter(v => regex.test(v));
        }

        this.setState({text: value, suggestions: suggestions}); /**/

        const {name}=this.props;

        this.props.updateData(value, name);
    }

    suggestionSelected = (value) => {

        this.setState({text: value, suggestions: []});

        const {name}=this.props;

        this.props.updateData(value, name);
    }

    renderSuggestions() {
        const {suggestions}=this.state;

        if (!suggestions.length) {
            return null;
        }
        return (
            <ul  className={"search-bar__list"}>
                {suggestions.map((item)=><li key={item} className={"search-bar__items"} onClick={() => this.suggestionSelected(item)}>{item}</li>)}
            </ul>
        )
    }
}



export default  SearchBar