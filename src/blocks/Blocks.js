import React from 'react';
import style from './Blocks.module.css'
import medal from '../assets/images/medal.svg';
import cup from '../assets/images/cup.svg';
import perch from '../assets/images/bestFriend.svg';
import franch from '../assets/images/medal.svg';

let Blocks = () => {
    return(
        <div className={style.blocksContainer}>
            <div className={style.collectionItems}>
                <div className={style.item}>
                    <img className={style.image} src={medal} alt=""/>
                    <span>Pleasure</span>
                </div>
                <div className={style.item}>
                    <img className={style.image} src={cup} alt=""/>
                    <span>Comfortable</span>
                </div>
                <div className={style.item}>
                    <img className={style.image} src={franch} alt=""/>
                    <span>Franch</span>
                </div>
                <div className={style.item}>
                    <img className={style.image} src={perch} alt=""/>
                    <span>Num#1</span>
                </div>

            </div>
        </div>
    )
};

export default Blocks;