import React, {Component} from 'react'

import "./style.css"

class TrekkingShortDescription extends Component {
    render () {
        const {trekking}=this.props;
        const data =[{header: 'Регион', value: trekking.region},
            {header: 'Тип', value: trekking.type},
            {header: 'Сложность', value: trekking.complexity},
            {header: 'Длительность', value: trekking.duration}
        ];
        const list = data.map(item=><li className={"trekking-short-description__item"}  key={item.header}><p>{item.header}</p><p>{item.value}</p></li>);
        return (
            <ul className={"trekking-short-description"}>
                {list}
            </ul>
        )
    }
}

export default TrekkingShortDescription