import React from 'react'
import './Catalog.css'
import ItemCard from "../itemCard/ItemCard";
import {
    birthday_chocolate,
    heart_vanilla,
    vanilla_wedding,
    bread_bucket,
    muffins,
    donnuts
} from '../../constants/cake-types'

class Catalog extends React.Component{

    passOrder = (orderedItem) =>{
        let date = new Date();
        orderedItem.date = new Date(date.setDate(date.getDay() + orderedItem.time));
        console.log(orderedItem.date);
        this.props.order(orderedItem);
    };

    render(){
        return(
            <div className ='catalog'>
                <ItemCard user={this.props.user}
                          imgPath={birthday_chocolate.image}
                          des={birthday_chocolate}
                          order={this.passOrder}
                />
                <ItemCard user={this.props.user}
                          imgPath={heart_vanilla.image}
                          des={heart_vanilla}
                          order={this.passOrder}
                />
                <ItemCard user={this.props.user}
                          imgPath={vanilla_wedding.image}
                          des={vanilla_wedding}
                          order={this.passOrder}
                />
                <ItemCard user={this.props.user}
                          imgPath={bread_bucket.image}
                          des={bread_bucket}
                          order={this.passOrder}
                />
                <ItemCard user={this.props.user}
                          imgPath={muffins.image}
                          des={muffins}
                          order={this.passOrder}
                />
                <ItemCard user={this.props.user}
                          imgPath={donnuts.image}
                          des={donnuts}
                          order={this.passOrder}
                />
            </div>
        )
    }
}

export default Catalog;