import React, { Component } from 'react'
import { ScrollView } from 'react-native';
import { DISHES } from '../../shared/dishes';
import { COMMENTS } from '../../shared/comments';
import RenderDish from './RenderDish';
import RenderDishComment from './RenderDishComment';

class DishDetails extends Component {
    state = {
        dishes: DISHES,
        comments: COMMENTS,
        favorites: []
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

    markFavorite = (dishId) => {
        this.setState({
            favorites: this.state.favorites.concat(dishId)
        })
        console.log(this.state.favorites)
    }
    render() {

        const dishId = this.props.navigation.getParam('dishId', '');
        // console.log(dishId)
        const dish = this.state.dishes[+dishId]
        const comments  = this.state.comments.filter(comment => comment.dishId == dishId)
        console.log("Comments", comments)
        const fav = this.state.favorites.some(el => el == dishId)
        
        return (
            <ScrollView>
                <RenderDish fav = {fav} dish = {dish} markFavorite = {() => this.markFavorite(dishId)}/>
                <RenderDishComment comments = {comments} />
            </ScrollView>
        )
    }  
}

export default DishDetails