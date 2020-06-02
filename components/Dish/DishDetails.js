import React from 'react'
import { Card } from 'react-native-elements';
import { Text, View } from 'react-native';

const DishDetails = (props) => {
    const dish = props.dish;

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

export default DishDetails