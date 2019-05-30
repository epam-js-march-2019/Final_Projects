import React from 'react'
import './ItemCard.css'
class ItemCard extends React.Component{

    render(){
        console.log(this.props.user);
        if(this.props.user) {
            console.log(window.location.href.toString());
            if(window.location.href.toString() === 'http://localhost:3000/Catalog'){
                return (
                    <section className='itemCard'>
                        <section className='description'>
                            <p>{this.props.des.name}</p>
                            <p>Price: {this.props.des.price} rubles</p>
                            <p>Calories: {this.props.des.calories}</p>
                            <p className='ingredients'>Ingredients: {this.props.des.ingredients.join(', ')}</p>
                            <p>Time to complete: {this.props.des.time}</p>
                        </section>
                        <div className='imageContainer'>
                            <img className='image'
                                 src={this.props.des.image}
                                 alt=''/>
                        </div>
                        <div className='button' onClick={()=>{this.props.order(this.props.des)}}>Order this</div>
                    </section>
                )
            } else{
                return(
                    <section className='itemCard'>
                        <section className='description'>
                            <p>{this.props.des.name}</p>
                            <p>Price: {this.props.des.price} rubles</p>
                            <p>Calories: {this.props.des.calories}</p>
                            <p className='ingredients'>Ingredients: {this.props.des.ingredients.join(', ')}</p>
                        </section>
                        <div className='imageContainer'>
                            <img className='image' src={this.props.des.image} alt=''/>
                        </div>
                        <p className = 'timeStatus'>Will be ready on {this.props.des.date}</p>
                    </section>
                )
            }
        } else{
            console.log(this.props);
            return(
                <section className='itemCard'>
                    <section className='description'>
                        <p>{this.props.des.name}</p>
                        <p>Price: {this.props.des.price} rubles</p>
                        <p>Calories: {this.props.des.calories}</p>
                        <p>Ingredients: {this.props.des.ingredients.join(', ')}</p>
                    </section>
                    <div className='imageContainer'>
                        <img className='image'
                             src={this.props.imgPath}
                             alt=''/>
                    </div>
                    <p className='authSuggestion'>Authorize to order this</p>
                </section>
            )
        }
    }
}

export default ItemCard;