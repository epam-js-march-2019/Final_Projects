import React from 'react'

export default class ServiceList extends React.Component {
    constructor(props) {
        super(props);
        this.state = [{
            title: "заявление",
            tax: 23,
            price: 12,
            date: '21.09.2018'
        },
            {
                title: "заявление",
                tax: 23,
                price: 12,
                date: '15.08.2014'
            }

        ];
    }

    render() {
        return (
            <section className="service-archive">
                <table className="archive-list">
                    <tr>
                        <td>Service Name</td>
                        <td>Tax</td>
                        <td>Price</td>
                        <td>Date</td>
                    </tr>
                {this.state.map((item, index) => {
                    return <tr>
                        <td>{item.title}</td>
                        <td>{item.tax}</td>
                        <td>{item.price}</td>
                        <td>{item.date}</td>
                    </tr>
                })}
                </table>
            </section>
        )
    }

}