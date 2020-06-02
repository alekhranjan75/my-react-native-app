import React, {Component} from 'react';
import { DISHES } from '../shared/dishes';
import Menu from './Menu';

class Main extends Component {
    state = {
        dishes: DISHES
    }
    render() {
        return (
            <Menu dishes = {this.state.dishes} />
        )
    }
}

export default Main;