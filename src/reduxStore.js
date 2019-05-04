import {createStore} from 'react'

const initialState = {
    cartItems: []
};

const updateCart = (state = [], action) => {
    switch (action.type) {
        case 'ADD':
            return state.map((fruit) => {
                if (action.id === fruit.id){
                    return Object.assign({}, fruit, {
                        count: fruit.count + 1
                    })
                }
                return fruit
            })
        case 'REMOVE':
            return state.map((fruit) => {
                if (action.id === fruit.id && fruit.count > 0){
                    return Object.assign({}, fruit, {
                        count: fruit.count - 1
                    })
                }
                return fruit
            })
        default:
            return state;
    }
};

//const store = createStore(updateCart);