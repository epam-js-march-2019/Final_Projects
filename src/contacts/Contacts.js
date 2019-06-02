import React from 'react';
import style from './Contacts.module.css'
import { YMaps, Map, Placemark } from "react-yandex-maps";

const mapData = {
    center: [59.949501, 30.318788],
    zoom: 12,
};

const coordinates = [
    [59.949501, 30.318788],
];

let Contacts = () => {
    return(
        <div className={style.contactsContainer}>
            <div className={style.mapCont}>
                <YMaps >
                    <Map defaultState={mapData} width={"100%"}>
                        {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
                    </Map>
                </YMaps>
            </div>

        </div>
    )
};
export default Contacts;