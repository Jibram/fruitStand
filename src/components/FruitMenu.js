import React from 'react';
import Fruit from './Fruit'

const API = 'https://fruits.shub.club/fruits';

const currency_symbols = {
    'USD': '$',
}

class FruitMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            meta:[],
            fruits:[]
        }
    }

    componentDidMount(){
        fetch(API)
            .then(response => response.json())
            .then(data => this.setState({
                meta:data.meta,
                fruits:data.items
            }))
    }

    render() {
		const fruitList = this.state.fruits.map((fruit) => 
            <Fruit 
                currency={currency_symbols[this.state.meta.currencyCode]} 
                data={fruit}
            />
        )
        return (
            <div>
				{fruitList}
            </div>
        )
    }
}

export default FruitMenu