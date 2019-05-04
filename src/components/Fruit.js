import React from 'react';
import { connect } from 'react-redux'
import '../css/Fruit.css';

function appendZero(price){
    if (price.length < 5){
        return price + '0'*(5-price.length)
    }
    else return price;
}

class Fruit extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:props.data.name,
            price:props.data.price,
            image_src:props.data.image_src,
            id:props.data.id,
            count:0
        }
    }

    addFruit = () => {
        this.setState(state => ({
            count: this.state.count + 1
        }));
    }

    subFruit = () => {
        if (this.state.count > 0) {
            this.setState(state => ({
                count: this.state.count - 1
            }))
        }
    }

    render() {
        return (
            <div>
                <div>
                    <img src={this.state.image_src} alt={this.state.image_src} height='200' width='200'></img>
                </div>
                <button type="button" className="Add-Button" onClick={this.addFruit}>+</button>
                <p>{appendZero(this.props.currency + this.state.price)}</p>
                <button type="button" className="Sub-Button" onClick={this.subFruit}>-</button>
            </div>
        )
    }
}

export default Fruit;