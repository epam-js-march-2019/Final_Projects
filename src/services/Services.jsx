import React from 'react';
import style from './Services.module.css'
import ServiceItem from "./ServiceItem";

class Services extends React.Component{
    render() {
        return(
            <div>
                <div className={style.container}>
                    <ServiceItem/>
                </div>
            </div>
        )
    }
}
export default Services;