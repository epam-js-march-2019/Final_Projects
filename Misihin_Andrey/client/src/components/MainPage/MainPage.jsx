import React, { Fragment } from 'react';
import './MainPage.css';
import { EquipmentCardList, ExamplesCardList } from '../';

const LOAD_ITEMS = 4;

function MainPage(props) {
  props.clearEquipment(LOAD_ITEMS);
  props.clearExamples(LOAD_ITEMS);

  return (
    <Fragment>
      <h1 className="main__header">
        ФабЛаб — это лаборатория-мастерская с высокотехнологичным 
        оборудованием. Вы можете бесплатно использовать его для реализации
        своих проектов.
      </h1>
      <h2 className="main__secondary-header">У нас есть</h2>
      <EquipmentCardList show={LOAD_ITEMS}/>
      <h2 className="main__secondary-header">Наши посетители сделали</h2>
      <ExamplesCardList show={LOAD_ITEMS}/>
    </Fragment>
  )
}

export default MainPage;