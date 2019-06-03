import React from 'react';

class Services extends React.Component {

  render() {
    return (
      <div className='services'>
        <h1 className='services-title title'><span className='title-white'>our</span> services</h1>
        <div className='services-list'>
          <div className='services-item item'>
            <h2 className='services-subtitle subtitle'>HAIRCUT</h2>
            <div className='services-wrapper'>
              <ul className='item-list'>
                <li className='item-description'>Fist<br></br>
                  haircut</li>
                <li className='item-price'><span className='price'>36</span> $</li>
              </ul>
              <ul className='item-list'>
                <li className='item-description'>Gent's<br></br>
                  haircut</li>
                <li className='item-price'><span className='price'>40</span> $</li>
              </ul>
              <ul className='item-list'>
                <li className='item-description'>Mashine<br></br>
                  haircut</li>
                <li className='item-price'><span className='price'>30</span> $</li>
              </ul>
              <ul className='item-list'>
                <li className='item-description'>Children's<br></br>
                  haircut</li>
                <li className='item-price'><span className='price'>35 </span> $</li>
              </ul>
              <ul className='item-list'>
                <li className='item-description'>Fathers<br></br>
                  and children</li>
                <li className='item-price'><span className='price'>50</span> $</li>
              </ul>
            </div>
          </div>
          <div className='services-item item'>
            <h2 className='services-subtitle'>SHAVING</h2>
            <div className='services-wrapper'>
              <ul className='item-list'>
                <li className='item-description'>GENTS <br></br>
                  Royal Shave</li>
                <li className='item-price'><span className='price'>65</span> $</li>
              </ul>
              <ul className='item-list'>
                <li className='item-description'>Beard <br></br>
                  Trim</li>
                <li className='item-price'><span className='price'>30</span> $</li>
              </ul>
              <ul className='item-list'>
                <li className='item-description'> Head<br></br>
                  Shave</li>
                <li className='item-price'><span className='price'>40</span> $</li>
              </ul>
            </div>
          </div>

          <div className='services-item item'>
            <h2 className='services-subtitle'>OTHER<br></br>
              SERVICES</h2>
            <div className='services-wrapper'>
              <ul className='item-list'>
                <li className='item-description'>Hair Coloring</li>
                <li className='item-price'><span className='price'>18</span> $</li>
              </ul>
              <ul className='item-list'>
                <li className='item-description'>Eyebrow</li>
                <li className='item-price'><span className='price'>15</span> $</li>
              </ul>
            </div>
          </div>


          <div className='services-item item'>
            <h2 className='services-subtitle'>Facials</h2>
            <div className='services-wrapper'>
              <ul className='item-list'>
                <li className='item-description'>Signature<br></br>Facial</li>
                <li className='item-price'><span className='price'>60</span> $</li>
              </ul>
              <div className='item-ps'>P.S. Our stuff are real<br></br>
                professionals.<br></br>
                They help you to create or choose your<br></br>
                style and haircut.</div>
            </div>
          </div>


        </div>

      </div>



    )
  }
}

export default Services