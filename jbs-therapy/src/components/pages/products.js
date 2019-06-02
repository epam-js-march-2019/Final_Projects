import React, {Component} from 'react';

class Products extends Component {
    render() {
        return (
            <div className='container-fluid'>

                <table className="price-table">
                    <caption className="price-table__caption">Основные услуги</caption>
                    <tbody>
                    <tr className="price-table__row">
                        <td className="price-table__service">Прическа/сложная укладка на длинные волосы</td>
                        <td className="price-table__price">2500</td>
                    </tr>
                    <tr className="price-table__row">
                        <td className="price-table__service">Голливудская волна</td>
                        <td className="price-table__price">1800</td>
                    </tr>
                    <tr className="price-table__row">
                        <td className="price-table__service">Небрежная волна</td>
                        <td className="price-table__price">1500</td>
                    </tr>
                    <tr className="price-table__row">
                        <td className="price-table__service">Снятие, маникюр и покрытие гель-лак френч/дизайн</td>
                        <td className="price-table__price">2100</td>
                    </tr>
                    <tr className="price-table__row">
                        <td className="price-table__service">Японския маникюр</td>
                        <td className="price-table__price">1400</td>
                    </tr>
                    <tr className="price-table__row">
                        <td className="price-table__service">Мужской маникюр</td>
                        <td className="price-table__price">900</td>
                    </tr>
                    <tr className="price-table__row">
                        <td className="price-table__service">Долговременная укладка бровей</td>
                        <td className="price-table__price">2100</td>
                    </tr>
                    </tbody>
                </table>

                <table className="price-table">
                    <caption className="price-table__caption">Уроки красоты</caption>
                    <tbody>
                    <tr className="price-table__row">
                        <td className="price-table__service">Урок красоты</td>
                        <td className="price-table__price">3000</td>
                    </tr>
                    <tr className="price-table__row">
                        <td className="price-table__service">Большой Make Up Lesson от Евгении Абрамович </td>
                        <td className="price-table__price">4000</td>
                    </tr>
                    <tr className="price-table__row">
                        <td className="price-table__service">Идеальные брови/ Урок + Коррекция</td>
                        <td className="price-table__price">1800</td>
                    </tr>
                    <tr className="price-table__row">
                        <td className="price-table__service">Урок "Укладка волос для себя"</td>
                        <td className="price-table__price">2000</td>
                    </tr>
                    <tr className="price-table__row">
                        <td className="price-table__service">Косметичка: ревизия содержимого</td>
                        <td className="price-table__price">1100</td>
                    </tr>
                    </tbody>
                </table>

                <table id='price-table_last' className="price-table">
                    <caption className="price-table__caption">Комплексные услуги</caption>
                    <tbody>
                    <tr className="price-table__row">
                        <td className="price-table__service">Сет Night</td>
                        <td className="price-table__price">3200</td>
                    </tr>
                    <tr className="price-table__row">
                        <td className="price-table__service">Сет Express</td>
                        <td className="price-table__price">2300</td>
                    </tr>
                    <tr className="price-table__row">
                        <td className="price-table__service">Ритуал AROMA и Nude Wave</td>
                        <td className="price-table__price">1900</td>
                    </tr>
                    <tr className="price-table__row">
                        <td className="price-table__service">Ритуал для волос DOLCE VITA и укладка Nude Wave</td>
                        <td className="price-table__price">1500</td>
                    </tr>
                    <tr className="price-table__row">
                        <td className="price-table__service">Полный сервис оформления бровей и удаления пушка над губой</td>
                        <td className="price-table__price">1300</td>
                    </tr>
                    </tbody>
                </table>

            </div>
        );
    }
}

export default Products;
