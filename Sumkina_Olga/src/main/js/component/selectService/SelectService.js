import React from 'react'

export default class SelectAction extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        const options = this.props.services.map((item, index) => {
            return <option key={index} value={index}>{item.title}</option>
        });
        return(
            <section className="select-service">
                <select className="select" onChange={this.props.onChange}>
                    <option>Выберите услугу</option>
                    {options}
                </select>
            </section>
        )
    }
}