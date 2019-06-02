import React from 'react';
import style from './About.module.css'
let About = () => {
    return(
        <div className={style.aboutContainer}>
            <div className={style.textContainer}>
                <p className={style.text}>The multi-award winning Barber salon group has become one of London’s most relevant and successful salon brands following their launch in mid-2010. Co-founded by Ricky Lee Jones and Stewart Payne who met at Taylor Taylor, the original thinking was to bring a little bit of West End Luxury and service into the East End and to create a “go-to” salon that was welcoming from the moment our guests arrived, with little touches and thoughts that made every visit a pleasure. This ethos continues today and our flagship salon is thriving in the heart of Shoreditch.
                </p>
                <p className={style.text}>In 2013, it was time to take a bit of East End rawness into the West End, so we opened our second salon in Covent Garden at the eponymous St. Martin’s Lane hotel and the Barber attention to detail has been welcomed with open arms. We pride ourselves on the product that we offer and are hugely proud to be a major part of the hair scene in London which culminated in being crowned Best Hair Salon 2013/14 at the prestigious London Lifestyle Awards.</p>
                <p className={style.text}>Barber strive to provide a relaxed and unpretentious environment for our customers whilst offering the very best in cutting and colouring talent. We have a wonderful team that is truly one big family and Ricky and the gang look forward to looking after you soon.</p>
            </div>
        </div>
    )
};
export default About;