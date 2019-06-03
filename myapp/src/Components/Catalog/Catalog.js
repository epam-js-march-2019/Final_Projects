import React, {Component} from 'react';
// import DatePicker from "react-datepicker";
import './Catalog.css';

class Item extends Component{
constructor(props) {
super(props);
this.state = {
startDate: new Date()
};
this.handleChange = this.handleChange.bind(this);
}

addProduct=() =>{
// если нажали купить и пользователь авторизован то записываем в бд
const obj={name:this.props.name,price:this.props.price}
const arrRegUser=JSON.parse(localStorage.getItem('users'));
var id=localStorage.getItem('currentUser')
if(id!=="0" || id){
//взяли текущего юсера
for (var i = 0; i < arrRegUser.length; i++){ 
     if (Number(arrRegUser[i].id)===Number(id)){ 
        arrRegUser[i].order.push(obj); 
        localStorage.setItem('users', JSON.stringify(arrRegUser));
        }
    }
} 
}

handleChange(date) { this.setState({ startDate: date }); } 

render(){ 

    return( <div className='Item'>
    <h3 className='Item_name'>{this.props.name}</h3>
    <div className='Item_desc'>{this.props.description}</div>
    <div className='Item_price'>{this.props.price}</div>
    <button className="button_buy" onClick={this.addProduct}>Buy</button>
    </div>
    )
    }
    }

    export default class Catalog extends Component{
    state = {
    items: [
    {name:'Чистка лица',price:"1000",description:'Механическая чистка лица производится стерильно.'},
    {name:'Массаж лица',price:"500",description:'Профессионаьный массаж длинною 30 мин.'},
    {name:'Пиллинг',price:"600",description:'Кислотный пиллинг. Кожа после него как у младенца.'},
    {name:'Маска',price:"600",description:'Маска для лица с водорослями.'}
    ]
    }

    render(){
    return(
    <div className="catalog">
        {this.state.items.map((item, index) =>{
        return(
        <Item price={item.price} key={index} name={item.name} description={item.description} />
        )
        })}
    </div>

    )}
    }