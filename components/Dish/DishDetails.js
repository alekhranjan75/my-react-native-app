import React, { Component } from 'react'
import { Card } from 'react-native-elements';
import { Text, View } from 'react-native';
import { DISHES } from '../../shared/dishes';

class DishDetails extends Component {
    state = {
        dishes: DISHES
    }

    static navigationOptions = {
        title: 'Dish Details',
        headerStyle: {
            backgroundColor: '#8956fe'
        },
        headerTitleStyle: {
            color: 'black'
        }
    }
    render() {

        const dishId = this.props.navigation.getParam('dishId', '');
        const dish = this.state.dishes[+dishId]

        let details = null
        
        if (dish != null) {
            details = 
                <Card
                    featuredTitle = {dish.name}
                    image = {require('../../assets/images/uthappizza.png')}
                    >
                        <Text style = {{margin : 10}}>
                            {dish.description}
                        </Text>
                </Card>
        }
        return (
            <View>
                {details}
            </View>
        )
    }  
}

export default DishDetails