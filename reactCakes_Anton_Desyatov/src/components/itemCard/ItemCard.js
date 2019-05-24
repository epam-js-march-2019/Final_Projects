import React from 'react'
import './ItemCard.css'
class ItemCard extends React.Component{

    render(){
        console.log(this.props.user);
        if(this.props.user) {
            console.log(window.location.href.toString());
            if(window.location.href.toString() === 'http://localhost:3000/Catalog'){
                return (
                    <div className='itemCard'>
                        <div className='description'>
                            <p>{this.props.des.name}</p>
                            <p>Price: {this.props.des.price} rubles</p>
                            <p>Calories: {this.props.des.calories}</p>
                            <p className='ingredients'>Ingredients: {this.props.des.ingredients.join(', ')}</p>
                            <p>Time to complete: {this.props.des.time}</p>
                        </div>
                        <div className='imageContainer'>
                            <img className='image'
                                 src={this.props.des.image}
                                 alt=''/>
                        </div>
                        <div className='button' onClick={()=>{this.props.order(this.props.des)}}>Order this cake</div>
                    </div>
                )
            } else{
                return(
                    <div className='itemCard'>
                        <div className='description'>
                            <p>{this.props.des.name}</p>
                            <p>Price: {this.props.des.price} rubles</p>
                            <p>Calories: {this.props.des.calories}</p>
                            <p className='ingredients'>Ingredients: {this.props.des.ingredients.join(', ')}</p>
                        </div>
                        <div className='imageContainer'>
                            <img className='image' src={this.props.des.image} alt=''/>
                        </div>
                        <p className = 'timeStatus'>Will be ready on {this.props.des.date}</p>
                    </div>
                )
            }
        } else{
            console.log(this.props);
            return(
                <div className='itemCard'>
                    <div className='description'>
                        <p>{this.props.des.name}</p>
                        <p>Price: {this.props.des.price} rubles</p>
                        <p>Calories: {this.props.des.calories}</p>
                        <p>Ingredients: {this.props.des.ingredients.join(', ')}</p>
                    </div>
                    <div className='imageContainer'>
                        <img className='image'
                             src={this.props.imgPath}
                             alt=''/>
                    </div>
                    <p className='authSuggestion'>Authorize to order this cake</p>
                </div>
            )
        }
    }
}

export default ItemCard;