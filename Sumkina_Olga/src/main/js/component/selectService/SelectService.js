import React from 'react'
export default class SelectAction extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        const options = this.props.services.map((item, index) => {
            return <option key={index} value={item}>{item.title}</option>
        });

        console.log(this.props.services);

        return(
            <section className="select-service">
                <select className="select">
                    {options}
                </select>
            </section>
        )
    }
}