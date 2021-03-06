import React, { Component } from 'react'
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { DISHES } from '../shared/dishes';

class Menu extends Component {
    state = {
        dishes: DISHES
    }

    static navigationOptions = {
        title: 'Menu',
        headerStyle: {
            backgroundColor: '#8956ff'
        },
        headerTitleStyle: { color: 'black' }
    }
    
    render() {
        const {navigate} = this.props.navigation
        const renderMenuItem = ({item, index}) => {
            return (
                <ListItem
                    key = {index}
                    title = {item.name}
                    subtitle = {item.description}
                    hideChevron = {true}
                    onPress = {() => navigate('DishDetails', {dishId: item.id})}
                    leftAvatar = {{source: require('../assets/images/uthappizza.png')}}
                />
            )
        }
        
        return (
           <FlatList
                data = {this.state.dishes}
                renderItem = {renderMenuItem}
                keyExtractor = {item => item.id.toString()}
            />
        )
    }
}

export default Menu;