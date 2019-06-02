import React, {Component} from 'react';
import mainPic from './mainJBS.jpg';

class Homepage extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <h1>Самая гостеприимная и добрая студия красоты с прекрасным видом на Ботанический сад!</h1>
                <blockquote>
                    <p>Через искренний сервис к успеху!
                        Этот девиз я несу вот уже как 8 лет!
                        Выполняй свою работу от души, с любовью к своему ремеслу. Не знай скупости на советы, уважай себя и уважай людей, которые приходят к тебе за услугой.
                        Хочешь успеха? Не знай усталости, не ной, постоянно учись и повышай свои знания, анализируй свои работы и определи свою цель. </p>
                        <footer><cite>Евгения Абрамович<br/>
                            Руководитель студии, визажист и бровист</cite></footer>
                </blockquote>
                <img className='homePage-mainImg' alt='JBS Therapy' src={mainPic}/>
            </div>
        );
    }
}

export default Homepage;
