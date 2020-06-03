import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import { DISHES } from '../shared/dishes'
import { LEADERS } from '../shared/leaders'
import { PROMOTIONS } from '../shared/promotions'
import { Card } from 'react-native-elements'

class Home extends Component {
    state = {
        dishes: DISHES,
        promotions: PROMOTIONS,
        leaders: LEADERS
    }
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#8956fe'
        },
        headerTitleStyle: {
            color: 'black'
        }
    }
    
    renderItem = (item) => {
        if (item != null) {
            return(
                <Card
                    featuredTitle={item.name}
                    featuredSubtitle={item.designation}
                    image={require('../assets/images/uthappizza.png')}>
                    <Text
                        style={{margin: 10}}>
                        {item.description}</Text>
                </Card>
            );
        }
        else {
            return(<View></View>);
        }
    }

    render() {
        return (
            <ScrollView>
                {this.renderItem(this.state.dishes.filter(dish => dish.featured)[0])}
                {this.renderItem(this.state.promotions.filter(promo => promo.featured)[0])}
                {this.renderItem(this.state.leaders.filter(leader => leader.featured)[0])}
            </ScrollView>
        )
    }
}

export default Home