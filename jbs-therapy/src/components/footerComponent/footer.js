import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
           <footer className='contact'>
               <div className="contact contact--footer">
                   <h3 className="contact__title">Адрес</h3>
                   <p className="contact__value">м. Петроградская, Аптекарский проспект 4, 1 этаж </p>
               </div>
           </footer>
        );
    }
}

export default Footer;
