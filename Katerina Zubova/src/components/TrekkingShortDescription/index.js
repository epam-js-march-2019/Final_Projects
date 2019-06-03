import React, {Component} from 'react'

import "./style.css"

class TrekkingShortDescription extends Component {
    render () {
        const {trekking}=this.props
        return (
            <ul className={"trekking-short-description"}>
                <li className={"trekking-short-description__item"}>
                    <p>Регион </p>
                    <p>{trekking.region}</p>
                </li>
                <li className={"trekking-short-description__item"}>
                    <p>Тип</p>
                    <p>{trekking.type}</p>
                </li>
                <li className={"trekking-short-description__item"}>
                    <p>Сложность</p>
                    <p>{trekking.complexity}</p>
                </li>
                <li className={"trekking-short-description__item"}>
                    <p>Длительность</p>
                    <p>{trekking.duration}</p>
                </li>
            </ul>
        )
    }
}

export default TrekkingShortDescription