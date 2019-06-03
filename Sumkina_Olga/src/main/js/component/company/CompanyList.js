import React from 'react'
import Company from './Company'

export default class CompanyList extends React.Component {

    constructor(props){
        super(props);
        this.state = [
            {
                name: 'Frodo',
                address: 'New York',
                phone: 2324342,
                img: 44,
                service: ['Доверенность на автомобиль', 'Заявление', 'Завещание']
            },
            {
                name: 'Adam',
                address: 'Old York',
                phone: 454542,
                img: 24,
                service: ['Завещание', 'Доверенность на недвижимость', 'Прочие довереннсоти']
            },
            {
                name: 'Charls Dic',
                address: 'Chicago',
                phone: 2324342,
                img: 28,
                service: ['Доверенность на автомобиль', 'Завещание', 'Доверенность на недвижимость']
            },
            {
                name: 'James',
                address: 'Las Vegas',
                phone: 2763852,
                img: 30,
                service: ['Заявление', 'Завещание', 'Прочие довереннсоти']
            },
            {
                name: 'Raf',
                address: 'Moscaw',
                phone: 345353,
                img: 29,
                service: ['Доверенность на автомобиль', 'Доверенность на недвижимость']
            },
            {
                name: 'Phillipp',
                address: 'Roma',
                phone: 34534535,
                img: 29,
                service: ['Доверенность на автомобиль', 'Доверенность на недвижимость']
            }

        ]
    }


    render() {

        const company = this.state.map((item, index) => {
            return <Company key="index" name={item.name} address={item.address} phone={item.phone} service={item.service}/>
        });

        return (
            <article className="company-list">
                {company}
            </article>
        )
    }
}