import React, {Component} from 'react';
 import './Order.css'

const arrRegUser=JSON.parse(localStorage.getItem('users'));
const idCurrUser=localStorage.getItem('currentUser');
const isRightemail= arrRegUser.find(x => x.id == idCurrUser);

export default class Order extends Component{
constructor(props) {
super(props); // всегда обязательно
this.state = { order: isRightemail.order };
this.Delete = this.Delete.bind(this);
}

Delete=()=>{

this.state.order.splice(this.index, 1);
localStorage.setItem('users', JSON.stringify(arrRegUser));
window.location.reload();

}
render(){
return(
this.state.order.map((item, index) => {
return(
<tr className="order_tr" key={index}>
    <td className="order_td">{item.name}</td>
    <td className="order_td">{item.price}</td>
    <td className="order_td"><a className="order_Delete" onClick={this.Delete}>Delete</a></td>
</tr>
)
})
)
}
}