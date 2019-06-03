import React from 'react';

class Contacts extends React.Component {
  goToHomepage(event) {
    event.preventDefault();
  }
  render() {
    return (
      <div className='contacts'>
        <h1 className='contacts-title title'>contacts</h1>
        <div className='contacts-item contacts__phone'>+7 (952) 273-01-00</div>
        <div className='contacts-item contacts__address'> Saint-Petrsburg, <br></br>
          st. Naberegnaya Obvodnogo kanala, 96 </div>
        <div className='contacts-item contacts__time'>Everyday
10:00 - 22:00</div>
      </div >


    )
  }
}

export default Contacts