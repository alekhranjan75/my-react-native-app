import React, {Component} from 'react';
import { DISHES } from '../shared/dishes';
import Menu from './Menu';
import DishDetails from './Dish/DishDetails';
import { View } from 'react-native';

class Main extends Component {
    state = {
        dishes: DISHES,
        selectedDish: null
    }

    onSelectDish = (dishId) => {
        this.setState ({
            selectedDish: dishId
        })
    }
    render() {
        return (
            <View >
                <Menu 
                    dishes = {this.state.dishes} 
                    onPress = {(dishId) => this.onSelectDish(dishId)}/>
                <DishDetails dish = {this.state.dishes.filter(dish => dish.id === this.state.selectedDish)[0]} />
            </View>
        )
    }
}

export default Main;