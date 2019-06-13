import React from 'react'
import Company from './Company'

export default class CompanyList extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        const clickListener = this.props.onClick;
        const company = this.props.companies.map((item, index) => {
            return <Company key={index} name={item.name} address={item.address} phone={item.phone}
                            onClick={clickListener}/>
        });

        return (
            <article className="company-list">
                {company}
            </article>
        )
    }
}