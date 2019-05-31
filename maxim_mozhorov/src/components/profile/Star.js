import React,{Component} from 'react';

class Star extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className={(this.props.selected) ? "star selected" : "star"}></div>
        );
    }
}

export default Star;