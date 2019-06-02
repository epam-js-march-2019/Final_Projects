import React, {Component} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import setMinutes from "date-fns/setMinutes";
import setHours from "date-fns/setHours";

class Profilepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            service: '',
            serviceDate: new Date(),
            isConfirm: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value });
    }

    handleSelect(date) {
        this.setState({serviceDate: date});
    }

    handleSubmit(e) {
        e.preventDefault();
        let storeObj = JSON.parse(localStorage.getItem(this.props.email));
        let str  = this.state.service;
        str = str.slice(0, -4);
        storeObj['service'] = str;
        storeObj['serviceDate'] = this.state.serviceDate;
        localStorage.setItem(this.props.email, JSON.stringify(storeObj));
        this.setState({isConfirm: true});
    }

    render() {
        return (
            <div className='profilepage-container'>
                <form className='service-select-form' onSubmit={this.handleSubmit}>
                        <h1>Добро пожаловать,<br/> {this.props.name}</h1>
                        <p>Girls just wanna do fun.</p>
                        <p> Ваш e-mail: {this.props.email}</p>
                        <p><select className='service-select-form__select' name='service' onChange={this.handleChange} value={this.state.service} required>
                            <option value="" disabled selected hidden>Выберите услугу</option>
                            <optgroup label="Основные услуги" >
                                <option value='Прическа/сложная укладка на длинные волосы	2500'>Прическа/сложная укладка на длинные волосы	2500</option>
                                <option value='Голливудская волна	1800'>Голливудская волна	1800</option>
                                <option value='Небрежная волна	1500'>Небрежная волна	1500</option>
                                <option value='Снятие, маникюр и покрытие гель-лак френч/дизайн	2100'>Снятие, маникюр и покрытие гель-лак френч/дизайн	2100</option>
                                <option value='Японский маникюр	1400'>Японский маникюр	1400</option>
                                <option value='Мужской маникюр	900'>Мужской маникюр	900</option>
                                <option value='Долговременная укладка бровей	2100'>Долговременная укладка бровей	2100</option>
                            </optgroup>
                            <optgroup label="Уроки красоты">
                                <option value="Урок красоты	3000">Урок красоты	3000</option>
                                <option value="Большой Make Up Lesson от Евгении Абрамович	4000">Большой Make Up Lesson от Евгении Абрамович	4000</option>
                                <option value="Идеальные брови/ Урок + Коррекция	1800">Идеальные брови/ Урок + Коррекция	1800</option>
                                <option value="Урок &quotУкладка волос для себя&quot 2000">Урок "Укладка волос для себя"	2000</option>
                                <option value="Косметичка: ревизия содержимого	1100">Косметичка: ревизия содержимого	1100</option>
                            </optgroup>
                            <optgroup label="Комплексные услуги">
                                <option value="Сет Night	3200">Сет Night	3200</option>
                                <option value="Сет Express	2300">Сет Express	2300</option>
                                <option value="Ритуал AROMA и Nude Wave	1900">Ритуал AROMA и Nude Wave	1900</option>
                                <option value="Ритуал для волос DOLCE VITA и укладка Nude Wave	1500">Ритуал для волос DOLCE VITA и укладка Nude Wave	1500</option>
                                <option value="Полный сервис оформления бровей и удаления пушка над губой	1300">Полный сервис оформления бровей и удаления пушка над губой	1300</option>
                            </optgroup>
                        </select></p>
                        <DatePicker className='service-select-form__data'
                                    placeholderText="Выберите дату"
                                    selected={this.state.serviceDate}
                                    onChange={this.handleSelect}
                                    showTimeSelect
                                    minDate={new Date()}
                                    minTime={setHours(setMinutes(new Date(), 0), 10)}
                                    maxTime={setHours(setMinutes(new Date(), 0), 21)}
                                    timeFormat="HH:mm"
                                    dateFormat="MMMM d, yyyy h:mm aa"
                        />
                        <div className='registration-form__submit'>
                            <button className='registration-form__button'>Записаться</button>
                        </div><br/>
                    {this.state.isConfirm ?
                        <p>Вы успешно записаны на {JSON.parse(localStorage.getItem(this.props.email)).service}.
                        </p> : null
                    }

                    </form>
            </div>
        );
    }
}

export default Profilepage;
