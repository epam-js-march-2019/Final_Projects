import React from 'react';
import './Profile.css'
import ItemCard from "../itemCard/ItemCard";
class Profile extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.user);
        if(this.props.user)
            this.user = JSON.parse(localStorage.getItem(this.props.user));
    }

    state = {
        showEdit: false
    };

    getOrders = () => {
        let orders = [];
        let id = 0;
        this.user.orders.map((order) => {
            console.log(order);
                return orders.push(<ItemCard key={++id} des = {order} user = {this.user} imgPath = {order.image}/>)
            }
        );
        console.log(orders);
        return orders;
    };

    updateUserInfo = (e) => {
        e.preventDefault();
        this.user.name = this.state.name;
        this.user.age = this.state.age;
        this.user.phone = this.state.phone;
        this.user.address = this.state.address;
        localStorage.setItem(this.props.user, JSON.stringify(this.user));
        this.setState({showEdit: false});
    };

    updateUserName = (e) => {
        this.setState({name: e.target.value})
    };

    updateUserAge = (e) => {
        this.setState({age: e.target.value})
    };

    updateUserPhone =(e) => {
        this.setState({phone: e.target.value});
    };

    updateUserAddress = (e) =>{
        this.setState({address: e.target.value})
    };

    cancelUpdate = (e) => {
        this.setState({
            name: '',
            age: '',
            phone: '',
            address: ''
        });
        this.setState({showEdit: false})
    };

    render(){
        console.log(this.props.user);
        if(this.props.user) {
            this.user = JSON.parse(localStorage.getItem(this.props.user));
            console.log(this.user);
            if(!this.state.showEdit) {
                return (
                    <div className='profileContainer'>
                        <article className='profileInfo'>
                            <div className='profileInfoContainer'>
                                <p className='login'>{this.user.login}</p>
                                    <p>name: {this.user.name}</p>
                                    <p>age: {this.user.age}</p>
                                    <p>phone: {this.user.phone}</p>
                                    <p>address: {this.user.address}</p>
                                    <button className='button'
                                            onClick={()=>{this.setState({showEdit: true})}}>Edit info</button>
                            </div>
                        </article>
                        <article className='ordersInfo'>
                            <p>Current orders: </p>
                            {this.getOrders()}
                        </article>
                    </div>
                )
            }
            if(this.state.showEdit){
                return(
                    <div className='profileContainer'>
                        <article className='profileInfo'>
                            <form id='authForm'
                                  className='editForm'
                                  onSubmit={this.updateUserInfo}>
                                <label className='authLabel'> name:
                                    <input type='text'
                                           onChange={this.updateUserName}
                                           placeholder='enter your name'
                                    />
                                </label>
                                <label className='authLabel'> age
                                    <input placeholder='enter your age'
                                           onChange={this.updateUserAge}
                                    />
                                </label>
                                <label className='authLabel'> phone
                                    <input placeholder='enter your phone number'
                                           onChange={this.updateUserPhone}
                                    />
                                </label >
                                <label> address
                                    <input placeholder='enter your address'
                                           onChange={this.updateUserAddress}
                                    />
                                </label>
                                <input className='button confirmEdit'
                                       type='submit'
                                       value='Confirm'/>
                                <div className='button cancelEdit'
                                     onClick={this.cancelUpdate}>Cancel</div>
                            </form>
                        </article>
                        <article className='ordersInfo'>
                            <p>Current orders: </p>
                            {this.getOrders()}
                        </article>
                    </div>
                )
            }
        } else{
            return(
                <article className='blankProfile'>
                    <p onClick = {this.props.auth}
                       className='blankProfileText tab'>Authorize to view your profile</p>
                </article>
            )
        }
    }
}

export default Profile;