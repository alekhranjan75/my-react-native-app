import React from 'react'
import { View, Text } from 'react-native'
import { Card, Icon } from 'react-native-elements';


const RenderDish = (props) => {
    const dish = props.dish
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
                    <Icon
                        raised
                        reverse
                        name = {props.fav ? 'heart' : 'heart-o'}
                        type = 'font-awesome'
                        color = 'green' 
                        onPress = {() => !props.fav ? props.markFavorite(): console.log("Already fav")}   
                    />
            </Card>
        }
    return (
        <View>
            {details}
        </View>
    )
}

export default RenderDish
